import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { auth, db } from "./config/firebase";
import { clearUser, setUser } from "./actions/userActions";
import { CoursesPage } from "./pages/CoursesPage";
import { CoursePage } from "./pages/CoursePage";
import { LessonPage } from "./pages/LessonPage";
import { loadProgress } from "./model/loadProgress";
import { collection, onSnapshot } from "firebase/firestore";
import { getUserProgress } from "./model/getUserProgress";

export default function App() {
  const user = useSelector(state => state.user.user);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/courses",
      element: <CoursesPage />,
    },
    {
      path: "/courses/:course",
      element: <CoursePage />,
    },
    {
      path: "/courses/:course/:lessonId",
      element: <LessonPage />,
    },
  ]);

  const dispatch = useDispatch();

  useEffect(() => {
    loadProgress(user?.email, dispatch);
  }, [user]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user?.uid) {
        dispatch(setUser(user));
      } else {
        dispatch(clearUser(user));
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="w-screen min-h-screen bg-slate-100 overflow-x-hidden overflow-y-auto">
      <RouterProvider router={router} />
    </div>
  );
}
