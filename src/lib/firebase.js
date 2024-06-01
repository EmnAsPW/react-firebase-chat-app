import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-555dd.firebaseapp.com",
  projectId: "reactchat-555dd",
  storageBucket: "reactchat-555dd.appspot.com",
  messagingSenderId: "835560674047",
  appId: "1:835560674047:web:1965c6610d601976b1b2ca",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
