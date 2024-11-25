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
import clsx from "clsx";
import { setTheme } from "./actions/themeActions";

export default function App() {
  const user = useSelector(state => state.user.user);
  const theme = useSelector(state => state.theme.theme);

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
    const theme = localStorage.getItem("theme");
    dispatch(setTheme(theme));
  }, []);

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
    <div
      className={clsx(
        "w-screen min-h-screen bg-background overflow-x-hidden overflow-y-auto",
        theme
      )}
    >
      <RouterProvider router={router} />
    </div>
  );
}
