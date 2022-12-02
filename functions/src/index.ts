import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();
const firestore = admin.firestore();

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
  const userDoc = firestore.collection("customers").doc(uid);
  const userDocSnapshot = await userDoc.get();
  if (!userDocSnapshot.exists) {
    await new Promise((resolve) => setTimeout(resolve, 60000));
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
});
