import { firestore } from "../firebase/clientApp";
import { collection, getDocs } from "firebase/firestore";
import { ProductsAtom } from "../atoms/productsAtom";
import { useRecoilState } from "recoil";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/clientApp";

