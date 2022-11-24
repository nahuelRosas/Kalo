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
    metadata,
    providerData,
    customClaims,
  } = user;

  const newUser = {
    uid,
    email,
    displayName,
    photoURL,
    phoneNumber,
    disabled,
    emailVerified,
    metadata,
    providerData,
    customClaims: customClaims || {
      admin: false,
      editor: false,
    },
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    updateAt: admin.firestore.FieldValue.serverTimestamp(),
  };

  await firestore.collection("users").doc(uid).set(newUser);
});
