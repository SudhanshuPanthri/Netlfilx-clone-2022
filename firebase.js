import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLw1gerL4_x3X6NfHvMByt53dcNps-EOA",
  authDomain: "netfflix-clone-f806c.firebaseapp.com",
  projectId: "netfflix-clone-f806c",
  storageBucket: "netfflix-clone-f806c.appspot.com",
  messagingSenderId: "148898302998",
  appId: "1:148898302998:web:26d67e8acccac591803937",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { db, auth };
