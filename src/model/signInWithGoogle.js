import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";

export async function signInWithGoogle() {
  await signInWithPopup(auth, googleProvider);
}
