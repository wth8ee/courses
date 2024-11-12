import { CssIcon } from "./icons/CssIcon";
import { FirebaseIcon } from "./icons/FirebaseIcon";
import { GitIcon } from "./icons/GitIcon";
import { HtmlIcon } from "./icons/HtmlIcon";
import { JsIcon } from "./icons/JsIcon";
import { NodejsIcon } from "./icons/NodejsIcon";
import { ReactIcon } from "./icons/ReactIcon";
import { ReduxIcon } from "./icons/ReduxIcon";
import { TailwindIcon } from "./icons/TailwindIcon";
import { TsIcon } from "./icons/TsIcon";

export const courses = {
    html: {
      title: "HTML",
      lessons: 41,
      description: `
        HTML (Hypertext Markup Language) — это стандартный 
        язык разметки для создания веб-страниц. Он 
        описывает структуру контента на сайте, включая 
        заголовки, абзацы, изображения и ссылки.
      `,
      icon: HtmlIcon,
      link: "/courses/html"
    },
    css: {
      title: "CSS",
      lessons: 96,
      description: `
        CSS (Cascading Style Sheets) используется для стилизации 
        веб-страниц. Он позволяет изменять внешний вид элементов 
        на странице, включая цвета, шрифты, отступы и расположение.
      `,
      icon: CssIcon,
      link: "/courses/css"
    },
    javascript: {
      title: "JavaScript",
      lessons: 209,
      description: `
        JavaScript — это язык программирования, который используется 
        для создания интерактивных и динамичных элементов на 
        веб-страницах, таких как анимации, обработка форм и многое другое.
      `,
      icon: JsIcon,
      link: "/courses/javascript"
    },
    git: {
      title: "Git",
      lessons: 50,
      description: `
        Git — это система контроля версий, которая помогает разработчикам 
        отслеживать изменения в коде и работать над проектами совместно, 
        синхронизируя изменения между несколькими участниками.
      `,
      icon: GitIcon,
      link: "/courses/git"
    },
    tailwind: {
      title: "Tailwind CSS",
      lessons: 80,
      description: `
        Tailwind CSS — это фреймворк для создания пользовательских интерфейсов 
        с помощью утилитарных классов. Он позволяет быстро разрабатывать стили 
        без необходимости писать кастомный CSS.
      `,
      icon: TailwindIcon,
      link: "/courses/tailwind"
    },
    react: {
      title: "React JS",
      lessons: 137,
      description: `
        React — это библиотека JavaScript для создания пользовательских интерфейсов. 
        Она позволяет строить сложные приложения с использованием компонентов, 
        которые легко управляются и обновляются.
      `,
      icon: ReactIcon,
      link: "/courses/react"
    },
    nodejs: {
      title: "Node JS",
      lessons: 46,
      description: `
        Node.js — это серверная среда выполнения JavaScript, основанная на 
        движке V8 от Google Chrome. Она используется для разработки масштабируемых 
        и высокоэффективных серверных приложений.
      `,
      icon: NodejsIcon,
      link: "/courses/nodejs"
    },
    typescript: {
      title: "TypeScript",
      lessons: 58,
      description: `
        TypeScript — это надмножество JavaScript, которое добавляет поддержку 
        статической типизации. Это помогает разработчикам обнаруживать ошибки 
        на ранних стадиях разработки и улучшает автозавершение кода в редакторах.
      `,
      icon: TsIcon,
      link: "/courses/typescript"
    },
    redux: {
      title: "Redux",
      lessons: 36,
      description: `
        Redux — это библиотека для управления состоянием в JavaScript-приложениях. 
        Она помогает централизованно управлять состоянием и упрощает обмен данными 
        между компонентами в приложении.
      `,
      icon: ReduxIcon,
      link: "/courses/redux"
    },
    firebase: {
      title: "Firebase",
      lessons: 23,
      description: `
        Firebase — это платформа от Google для разработки мобильных и веб-приложений. 
        Она предоставляет решения для аутентификации, хранения данных, аналитики и 
        многого другого.
      `,
      icon: FirebaseIcon,
      link: "/courses/firebase"
    }
  };

  export const coursesKeys = Object.keys(courses)
  