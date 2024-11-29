import { CourseCard } from "./CourseCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { courses, coursesKeys } from "../courses/main.js";
import { NextArrow } from "./NextArrow";
import { PrevArrow } from "./PrevArrow";
import clsx from "clsx";

export function CoursesSlider() {
  const [slidesNumber, setSlidesNumber] = useState(getSlidesNumber());

  window.addEventListener("resize", () => {
    setSlidesNumber(getSlidesNumber());
  });

  function getSlidesNumber(n = 5) {
    const width = window.innerWidth;
    if (650 <= width && width <= 800) {
      n -= 1;
    } else if (width < 650) {
      n -= 2;
    }
    return n;
  }

  const coursesObj = [];
  for (let key of coursesKeys) {
    coursesObj.push(courses[key]);
  }

  coursesObj.sort((a, b) => a.unavailable - b.unavailable);

  const settings = {
    infinite: true,
    slidesToShow: slidesNumber,
    slidesToScroll: slidesNumber,
    autoplay: false,
    speed: 1500,
    autoplaySpeed: 4000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: true,
  };

  return (
    <Slider {...settings}>
      {coursesObj.map((course, i) => {
        return (
          <CourseCard
            key={i}
            className={clsx("my-5", course.unavailable && "opacity-50")}
            title={course.title}
            description={course.description}
            link={course.link}
            lessons={course.lessons}
            icon={<course.icon className="h-full w-full" />}
            unavailable={course.unavailable}
          />
        );
      })}
    </Slider>
  );
}
