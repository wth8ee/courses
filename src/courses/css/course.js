import { CssIcon } from "../../icons/CssIcon";
import { getLessons } from "../../model/getLessons";
import { programs } from "../programs";

export const cssCourse = {
  title: "CSS",
  lessons: getLessons(programs.css).length,
  description: `
      CSS (Cascading Style Sheets) используется для стилизации 
      веб-страниц. Он позволяет изменять внешний вид элементов 
      на странице, включая цвета, шрифты, отступы и расположение.
    `,
  icon: CssIcon,
  link: "/courses/css",
  largeDescription: `
      CSS (Cascading Style Sheets) — язык стилей, который позволяет разделить 
      структуру и оформление веб-страниц. С его помощью можно задавать цвета, 
      шрифты, отступы, анимации и эффекты, делая веб-страницы привлекательными 
      и удобными для пользователей. В этом курсе вы научитесь оформлять сайты, 
      работать с макетами и адаптивным дизайном, создавать стильные анимации 
      и трансформации. Вы освоите основные принципы CSS, а также узнаете, как 
      добиться кроссбраузерности и мобильной адаптивности.
    `,
};
