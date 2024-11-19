import { db } from "../config/firebase";
import { getDocs } from "firebase/firestore";
import { collection } from "firebase/firestore";

export async function getProgress() {
  const data = await getDocs(collection(db, "progress"));
  const filteredData = data.docs.map(doc => ({
    ...doc.data(),
    id: doc.id,
  }));
  return filteredData;
}
