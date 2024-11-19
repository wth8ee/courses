import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVgqyPiEEfzfQr0m4RlMYo2byKpNukUOU",
  authDomain: "courses-f35f6.firebaseapp.com",
  projectId: "courses-f35f6",
  storageBucket: "courses-f35f6.firebasestorage.app",
  messagingSenderId: "209247753942",
  appId: "1:209247753942:web:a6ac32bd0cec7949eb1b77",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
