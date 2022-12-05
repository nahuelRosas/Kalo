/* eslint-disable camelcase */
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import {logger} from "firebase-functions";
import Stripe from "stripe";
import {v2} from "cloudinary";

admin.initializeApp();
const firestore = admin.firestore();
const stripe = new Stripe(process.env.STRIPE_API_KEY as string, {
  apiVersion: "2022-11-15",
});

const cloudinaryConfig = {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME as string,
  api_key: process.env.CLOUDINARY_API_KEY as string,
  api_secret: process.env.CLOUDINARY_API_SECRET as string,
  secure: true,
};

v2.config(cloudinaryConfig);
export const onUserCreate = functions.auth.user().onCreate(async (user) => {
  const {
    uid,
    email,
    displayName,
    photoURL,
    phoneNumber,
    disabled,
    emailVerified,
    providerData,
  } = user;
  logger.info("User created", {
    uid,
    email,
    displayName,
  });
  const userDoc = firestore.collection("customers").doc(uid);
  const userDocSnapshot = await userDoc.get();
  while (!userDocSnapshot.exists) {
    await new Promise((resolve) => setTimeout(resolve, 10000));
  }
  await userDoc.update({
    uid,
    email,
    displayName,
    photoURL,
    phoneNumber,
    disabled,
    emailVerified,
    providerData,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    userType: {
      admin: false,
      user: true,
      editor: false,
    },
  });
  logger.info("User created", {
    uid,
    email,
    displayName,
  });
});

export const onProductCreate = functions.firestore
    .document("productsFirestore/{productId}")
    .onCreate(async (snap, context) => {
      const product = snap.data();

      const links = await Promise.all(
          product.images.map(async (image: Blob) => {
            const {secure_url} = await v2.uploader.upload(
          image as unknown as string,
          {
            folder: "products",
          }
            );
            return secure_url;
          })
      );
      const stripeProduct = await stripe.products.create({
        active: product.active,
        name: product.name,
        description: product.description,
        images: links,
        metadata: {
          firebaseId: context.params.productId,
        },
      });
      const productDoc = firestore.collection("products").doc(stripeProduct.id);
      const productDocSnapshot = await productDoc.get();
      while (!productDocSnapshot.exists) {
        await new Promise((resolve) => setTimeout(resolve, 10000));
      }
      await productDoc.update({
        ...product,
        id: stripeProduct.id,
        images: links,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      });
      logger.info("Updated product", productDoc);
      const stripePrice = await stripe.prices.create({
        product: stripeProduct.id,
        unit_amount: product.price,
        currency: "eur",
      });
      logger.info("Created Stripe price", stripePrice);
      const priceDoc = firestore.collection("prices").doc(stripePrice.id);
      const priceDocSnapshot = await priceDoc.get();
      while (!priceDocSnapshot.exists) {
        await new Promise((resolve) => setTimeout(resolve, 60000));
      }
      await priceDoc.update({
        ...product,
        id: stripePrice.id,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      });
      logger.info("Updated price", priceDoc);
      logger.info("Created Stripe product and price", {
        stripeProduct,
        stripePrice,
      });
      logger.info("Finished creating Stripe product and price");
    });
