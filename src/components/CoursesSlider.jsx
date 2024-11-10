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

export function CoursesSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    nextArrow: null,
    prevArrow: null,
    pauseOnHover: true,
  };

  return (
    <div className="w-[max(50vw,600px)]">
      <Slider {...settings}>
        <CourseCard title="HTML" lessons={41} icon={<HtmlIcon />} />

        <CourseCard title="CSS" lessons={96} icon={<CssIcon />} />

        <CourseCard title="JavaScript" lessons={209} icon={<JsIcon />} />

        <CourseCard title="React JS" lessons={137} icon={<ReactIcon />} />

        <CourseCard title="TypeScript" lessons={58} icon={<TsIcon />} />
      </Slider>
    </div>
  );
}
