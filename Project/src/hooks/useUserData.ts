import { doc, getDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";
import { UserAtom } from "../atoms/userDataAtom";
import { auth, firestore } from "../firebase/clientApp";
import { UsersAtom } from "../atoms/usersAtom";
const useUserData = () => {
  const [userAtom, setUserAtom] = useRecoilState(UserAtom);
  const [usersAtom, setUsersAtom] = useRecoilState(UsersAtom);
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

  const getUsersData = async () => {
    if (isAdmin() && !usersAtom.isLoadead) {
      const usersRef = doc(firestore, "ArrayCustomers", "Array");
      try {
        const docSnap = await getDoc(usersRef);
        if (docSnap.exists()) {
          const usersData = docSnap.data();
          const users = usersData.customers;
          setUsersAtom({ users: users, isLoadead: true });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const isAdmin = () => {
    if (userAtom.userType.admin || userAtom.userType.editor) return true;
    return false;
  };

  return {
    getUserData,
    userData: userAtom,
    usersData: usersAtom.users,
    isAdmin,
    UID: userAtom.uid,
    getUsersData,
  };
};

export default useUserData;
