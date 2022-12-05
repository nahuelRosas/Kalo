import { DocumentData } from "@firebase/firestore-types";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";
import { UserAtom } from "../atoms/userDataAtom";
import { auth, firestore } from "../firebase/clientApp";

const useUserData = () => {
  const [userAtom, setUserAtom] = useRecoilState(UserAtom);
  const [user] = useAuthState(auth);

  const getUserData = async () => {
    if (user === null || user === undefined) return;
    if (userAtom.isLoadead) return;
    const userRef = doc(firestore, "customers", user.uid);
    try {
      const docSnap = await getDoc(userRef);
      if (docSnap.exists()) {
        const userData = docSnap.data();
        setUserAtom({ ...userData, isLoadead: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { getUserData, userData: userAtom };
};

export default useUserData;
