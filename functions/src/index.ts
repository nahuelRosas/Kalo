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

export const createStripeProduct = functions.firestore
    .document("productsFirestore/{productId}")
    .onCreate(async (snap, context) => {
      const product = snap.data();
      try {
        const links: string[] = await Promise.all(
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
        logger.info("🥳 Created links for images", links);
        const stripeProduct = await stripe.products.create({
          active: product.active,
          name: product.name,
          description: product.description,
          images: links,
          metadata: {
            firebaseId: context.params.productId,
          },
          default_price_data: {
            currency: "eur",
            unit_amount: product.price.toString().split(".")[0] * 100,
            unit_amount_decimal: product.price.toString().split(".")[1],
          },
        });
        logger.info("🥰 Created Stripe product");
        await snap.ref.update({
          stripeId: stripeProduct.id,
          images: links,
        });
        logger.info("🥰 Updated Stripe product");
      } catch (error) {
        logger.error("🤬 Error creating Stripe product", error);
      }
    });

export const updateStripeProduct = functions.firestore
    .document("products/{productId}")
    .onCreate(async (snap) => {
      logger.info("🤨 Updating Stripe product");
      const product = snap.data();
      const productStripe = firestore.collection("products").doc(snap.id);
      const productFirestore = firestore
          .collection("productsFirestore")
          .doc(product.stripe_metadata_firebaseId);
      const productStripeSnapshot = await productStripe.get();
      const productStripeData = productStripeSnapshot.data();
      const productFirestoreSnapshot = await productFirestore.get();
      const productFirestoreData = productFirestoreSnapshot.data();
      if (!productFirestoreData) {
        logger.error("💀 No product found in Firestore");
        return;
      }
      logger.debug("🥳 Found product of Firestore", productFirestoreData);
      const priceSnapshot = await firestore
          .collection("products")
          .doc(snap.id)
          .collection("prices")
          .get();
      logger.debug("🥳 Found prices of Firestore", priceSnapshot.docs);
      const price = priceSnapshot.docs[0].data();
      logger.debug("🥳 Found price of Firestore", price);
      productStripe.update({
        ...productFirestoreData,
        id: snap.id,
        images: productStripeData?.images,
        price: price.unit_amount,
        priceId: priceSnapshot.docs[0].id,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      });
      logger.info("🤩 Updated Stripe Product with data of Firestore");
    });

export const updateArrayProducts = functions.firestore
    .document("products/{productId}")
    .onUpdate(async (snap) => {
      const product = snap.after.data();
      const ArrayProducts = firestore.collection("ArrayProducts").doc("Array");
      let ArrayProductsSnapshot = await ArrayProducts.get();
      if (!ArrayProductsSnapshot.exists) {
        await ArrayProducts.set({
          products: [product],
        });
        logger.info("🥳 Created ArrayProducts in Firestore and added product");
      }
      ArrayProductsSnapshot = await ArrayProducts.get();
      const ArrayProductsData = ArrayProductsSnapshot.data();
      if (!ArrayProductsData) {
        logger.error("💀 No ArrayProducts found in Firestore");
        return;
      }
      const ArrayProductsDataProducts = ArrayProductsData.products;
      const productExist = ArrayProductsDataProducts.find(
          (p: { id: string }) => p.id === product.id
      );
      logger.info("🥳 We are looking for the product in the array");
      if (productExist) {
        const index = ArrayProductsDataProducts.indexOf(productExist);
        ArrayProductsDataProducts[index] = product;
        logger.info("🥳 We found the product in the array");
      }
      if (!productExist) {
        ArrayProductsDataProducts.push(product);
        logger.info("🥳 We didn't find the product in the array");
      }
      await ArrayProducts.update({
        products: ArrayProductsDataProducts,
      });
      logger.info("🥳 Updated ArrayProducts in Firestore");
    });

export const updateCustomers = functions.firestore
    .document("customers/{customersId}")
    .onCreate(async (_snap, context) => {
      const user = await admin.auth().getUser(context.params.customersId);
      logger.info("🥳 Found user in Auth", user);
      const {
        email,
        displayName,
        photoURL,
        phoneNumber,
        disabled,
        emailVerified,
      } = user;
      const userDoc = firestore
          .collection("customers")
          .doc(context.params.customersId);
      logger.info("🥳 Found customer in Firestore");
      await userDoc.update({
        uid: context.params.customersId,
        email: email || "",
        displayName: displayName || email?.toString().split("@")[0] || "",
        photoURL:
        photoURL ||
        "https://res.cloudinary.com/dlcilp6vw/image/upload/v1667478654/avatars/isemxk5z1opyiwbu9fao.svg",
        phoneNumber: phoneNumber || "",
        disabled: disabled || false,
        emailVerified: emailVerified || false,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        address: {
          city: "",
          country: "",
          line1: "",
          line2: "",
          postal_code: "",
          state: "",
        },
        isAdmin: false,
      });
      logger.info("🥳 Created customer in Firestore");
    });

export const updateArrayCustomers = functions.firestore
    .document("customers/{customersId}")
    .onUpdate(async (snap) => {
      const customer = snap.after.data();
      const ArrayCustomers = firestore
          .collection("ArrayCustomers").doc("Array");
      let ArrayCustomersSnapshot = await ArrayCustomers.get();
      if (!ArrayCustomersSnapshot.exists) {
        await ArrayCustomers.set({
          customers: [customer],
        });
        logger.info("🥳 Created ArrayCustomers in Firestore and added customer");
      }
      ArrayCustomersSnapshot = await ArrayCustomers.get();
      const ArrayCustomersData = ArrayCustomersSnapshot.data();
      if (!ArrayCustomersData) {
        logger.error("💀 No ArrayCustomers found in Firestore");
        return;
      }
      const ArrayCustomersDataCustomers = ArrayCustomersData.customers;
      const customerExist = ArrayCustomersDataCustomers.find(
          (c: { email: string }) => c.email === customer.email
      );
      logger.info(
          "🥳 We are looking for the customer in the array",
          customerExist
      );
      if (customerExist) {
        const index = ArrayCustomersDataCustomers.indexOf(customerExist);
        ArrayCustomersDataCustomers[index] = customer;
        logger.info("🥳 We found the customer in the array");
      }
      if (!customerExist) {
        ArrayCustomersDataCustomers.push(customer);
        logger.info("🥳 We didn't find the customer in the array");
      }
      await ArrayCustomers.update({
        customers: ArrayCustomersDataCustomers,
      });
      logger.info("🥳 Updated ArrayCustomers in Firestore");
    });

export const updateLastPurchaseAndAddress = functions
    .runWith({
      minInstances: 0,
    })
    .firestore.document("/customers/{uid}/payments/{id}")
    .onUpdate(async (snap, context) => {
      const payment = snap.after.data();
      const customer = await firestore
          .collection("customers")
          .doc(context.params.uid);
      logger.info("🥳 Found customer in Firestore", customer);
      await customer.update({
        lastPurchase: payment,
        address: {
          city: payment?.charges?.data[0]?.billing_details?.address?.city,
          country: payment?.charges?.data[0]?.billing_details?.address?.country,
          line1: payment?.charges?.data[0]?.billing_details?.address?.line1,
          line2: payment?.charges?.data[0]?.billing_details?.address?.line2,
          postal_code: payment?.charges?.data[0]?.billing_details?.address
              ?.postal_code,
          state: payment?.charges?.data[0]?.billing_details?.address?.state,
        },
        lastRecipe: payment?.charges?.data[0]?.receipt_url,
      });
      logger.info("🥳 Updated customer in Firestore");
    });
