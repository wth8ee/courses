import { getProgress } from "./getProgress";

export async function getUserProgress(email) {
  const progress = await getProgress();
  const userProgress = progress?.find(elem => elem?.email === email);
  return userProgress;
}
