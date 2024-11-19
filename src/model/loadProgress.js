import { addDoc, collection } from "firebase/firestore";
import { getUserProgress } from "./getUserProgress";
import { db } from "../config/firebase";
import { setProgress } from "../actions/progressActions";

export async function loadProgress(email, dispatch) {
  if (!email) {
    return;
  }
  const progress = await getUserProgress(email);
  if (!progress) {
    const emptyProgress = {
      html: [],
      css: [],
      javascript: [],
      git: [],
      tailwind: [],
      nodejs: [],
      react: [],
      typescript: [],
      redux: [],
      firebase: [],
    };
    const data = {
      email: email,
      progress: emptyProgress,
    };
    addDoc(collection(db, "progress"), data);
  } else {
    dispatch(setProgress(progress));
  }
}
