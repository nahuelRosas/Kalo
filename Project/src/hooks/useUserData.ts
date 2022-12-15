import { doc, getDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";
import { UserAtom } from "../atoms/userDataAtom";
import { auth, firestore } from "../firebase/clientApp";
import { UsersAtom } from "../atoms/usersAtom";
import { WishlistAtom } from "../atoms/wishlistAtom";
import { ordersAtom } from "../atoms/ordersAtom";
const useUserData = () => {
  const [userAtom, setUserAtom] = useRecoilState(UserAtom);
  const [usersAtom, setUsersAtom] = useRecoilState(UsersAtom);
  const [State, SetState] = useRecoilState<WishlistAtom>(WishlistAtom);
  const [OrdersAtom, setOrdersAtom] = useRecoilState(ordersAtom);
  const [user] = useAuthState(auth);

  const getUserData = async () => {
    if (user === null || user === undefined) return;
    if (userAtom.isLoadead) return;
    const userRef = doc(firestore, "customers", user.uid);
    try {
      const docSnap = await getDoc(userRef);
      if (docSnap.exists()) {
        const userData = docSnap.data();
        const lastPurchaseSTR = JSON.stringify(userData?.lastPurchase || {});
        const lastPurchase = JSON.parse(lastPurchaseSTR);
        const ordersSTR = JSON.stringify(userData?.orders || []);
        const orders = JSON.parse(ordersSTR);
        setUserAtom({
          ...userData,
          isLoadead: true,
          lastPurchase: lastPurchase,
          orders: orders,
        });
        SetState({ wishlist: userData?.wishlist || [] });
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
          const users = usersData.customers.map((user: any) => {
            const lastPurchaseSTR = JSON.stringify(user?.lastPurchase || {});
            const lastPurchase = JSON.parse(lastPurchaseSTR);
            const ordersSTR = JSON.stringify(user?.orders || []);
            const orders = JSON.parse(ordersSTR);
            return { ...user, lastPurchase: lastPurchase, orders: orders };
          });
          setUsersAtom({ users: users, isLoadead: true });
          getOrdersData();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getOrdersData = async () => {
    if (isAdmin()) {
      const ordersRef = doc(firestore, "ArrayOrders", "Array");
      try {
        const docSnap = await getDoc(ordersRef);
        if (docSnap.exists()) {
          const ordersData = docSnap.data();
          const orders = ordersData.orders.map((order: any) => {
            const OrderSTR = JSON.stringify(order || {});
            const Order = JSON.parse(OrderSTR);
            return { ...Order };
          });
          setOrdersAtom({
            orders: orders,
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const isAdmin = () => {
    if (userAtom.isAdmin) return true;
    return false;
  };

  const Reload = () => {
    setUserAtom({ ...userAtom, isLoadead: false });
    setUsersAtom({ ...usersAtom, isLoadead: false });
    getUserData();
    getUsersData();
  };

  return {
    getUserData,
    userData: userAtom,
    usersData: usersAtom.users,
    isAdmin,
    UID: userAtom.uid,
    getUsersData,
    Reload,
    orders: OrdersAtom.orders,
  };
};

export default useUserData;
