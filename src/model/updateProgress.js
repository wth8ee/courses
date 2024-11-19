import { doc, updateDoc } from "firebase/firestore";
import { getUserProgress } from "./getUserProgress";
import { db } from "../config/firebase";
import { setProgress } from "../actions/progressActions";

export async function updateProgress(
  email,
  course = null,
  lesson = null,
  dispatch
) {
  if (!course || !lesson) {
    return;
  }
  const progress = await getUserProgress(email);
  const progressRef = doc(db, "progress", progress.id);
  const progressArray = progress.progress;
  const courseProgress = progressArray[course];
  const newCourseProgress = courseProgress.slice();
  newCourseProgress.push(Number(lesson));
  const newProgress = {
    ...progress,
    progress: {
      ...progress.progress,
      [course]: newCourseProgress,
    },
  };
  updateDoc(progressRef, newProgress);
  if (dispatch) {
    dispatch(setProgress(newProgress));
  }
}
