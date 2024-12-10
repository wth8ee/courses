import { useSelector } from "react-redux";
import { Header } from "../components/Header";
import { useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { courses } from "../courses/main";

export function ProfilePage() {
  const user = useSelector(state => state.user.user);
  const progress = useSelector(state => state.progress?.progress)?.progress;

  const progressKeys = [];
  for (let key in progress) {
    progressKeys.push(key);
  }

  const courseLessonsCompleted = [];
  for (let key of progressKeys) {
    courseLessonsCompleted.push(progress?.[key]?.length);
  }

  const coursesList = [];
  for (let key of progressKeys) {
    coursesList.push(courses[key]);
  }

  const coursesByLessonsCompleted = [];
  for (let i in coursesList) {
    coursesByLessonsCompleted.push({
      course: coursesList[i],
      lessonsCompleted: courseLessonsCompleted?.[i],
    });
  }

  coursesByLessonsCompleted.sort((a, b) => {
    const percentA = (a.lessonsCompleted * 100) / a.course.lessons;
    const percentB = (b.lessonsCompleted * 100) / b.course.lessons;
    return percentB - percentA;
  });

  const filteredCoursesList = [];
  for (let course of coursesByLessonsCompleted) {
    filteredCoursesList.push(course.course);
  }

  return (
    <div className="w-full">
      <Header />
      <main className="my-5 w-full flex justify-center">
        <div className={`flex flex-col gap-4`}>
          {filteredCoursesList?.map((course, i) => {
            const lessonsCompleted =
              coursesByLessonsCompleted[i].lessonsCompleted;
            const lessons = course.lessons;
            const title = course.title;
            const icon = course.icon;
            const unavailable = course.unavailable;
            const link = course.link;

            return (
              <ProgressBar
                key={i}
                a={lessonsCompleted}
                b={lessons}
                title={title}
                Icon={icon}
                unavailable={unavailable}
                link={link}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
