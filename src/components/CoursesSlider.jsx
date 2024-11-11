import { CourseCard } from "./CourseCard";
import { HtmlIcon } from "../icons/HtmlIcon";
import { CssIcon } from "../icons/CssIcon";
import { JsIcon } from "../icons/JsIcon";
import { Carousel } from "flowbite-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactIcon } from "../icons/ReactIcon";
import { TsIcon } from "../icons/TsIcon";
import { TailwindIcon } from "../icons/TailwindIcon";
import { ReduxIcon } from "../icons/ReduxIcon";
import { FirebaseIcon } from "../icons/FirebaseIcon";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import { NodejsIcon } from "../icons/NodejsIcon";
import { useState } from "react";
import { courses } from "../constants";

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

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: slidesNumber,
    slidesToScroll: slidesNumber - 1,
    autoplay: false,
    speed: 1500,
    autoplaySpeed: 4000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: true,
  };

  function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ChevronRightIcon className="w-10 text-black" />
      </div>
    );
  }

  function PrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ChevronLeftIcon className="w-10 text-black" />
      </div>
    );
  }

  const coursesKeys = Object.keys(courses);

  return (
    <Slider {...settings}>
      {coursesKeys.map(key => {
        const course = courses[key];
        return (
          <CourseCard
            className="my-5"
            title={course.title}
            description={course.description}
            lessons={course.lessons}
            icon={<course.icon className="h-full w-full" />}
          />
        );
      })}
    </Slider>
  );
}
