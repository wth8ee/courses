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

export function CoursesSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
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

  return (
    <Slider {...settings}>
      <CourseCard
        title="HTML"
        lessons={41}
        icon={<HtmlIcon className="w-full h-full" />}
      />

      <CourseCard
        title="CSS"
        lessons={96}
        icon={<CssIcon className="w-full h-full" />}
      />

      <CourseCard
        title="JavaScript"
        lessons={209}
        icon={<JsIcon className="w-full h-full" />}
      />

      <CourseCard
        title="Node JS"
        lessons={46}
        icon={<NodejsIcon className="w-full h-full" />}
      />

      <CourseCard
        title="React JS"
        lessons={137}
        icon={<ReactIcon className="w-full h-full" />}
      />

      <CourseCard
        title="Tailwind"
        lessons={80}
        icon={<TailwindIcon className="w-full h-full" />}
      />

      <CourseCard
        title="TypeScript"
        lessons={58}
        icon={<TsIcon className="w-full h-full" />}
      />

      <CourseCard
        title="Redux"
        lessons={36}
        icon={<ReduxIcon className="w-full h-full" />}
      />

      <CourseCard
        title="Firebase"
        lessons={23}
        icon={<FirebaseIcon className="w-full h-full" />}
      />
    </Slider>
  );
}
