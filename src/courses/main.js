import { CssIcon } from "../icons/CssIcon";
import { FirebaseIcon } from "../icons/FirebaseIcon";
import { GitIcon } from "../icons/GitIcon";
import { HtmlIcon } from "../icons/HtmlIcon";
import { JsIcon } from "../icons/JsIcon";
import { NodejsIcon } from "../icons/NodejsIcon";
import { ReactIcon } from "../icons/ReactIcon";
import { ReduxIcon } from "../icons/ReduxIcon";
import { TailwindIcon } from "../icons/TailwindIcon";
import { TsIcon } from "../icons/TsIcon";
import { getLessons } from "../model/getLessons";
import { cssCourse } from "./css/course";
import { htmlCourse } from "./html/course";
import { programs } from "./programs";
import { reactCourse } from "./react/course";

export const courses = {
  html: htmlCourse,
  css: cssCourse,
  javascript: {
    unavailable: true,
    title: "JavaScript",
    lessons: getLessons(programs.javascript).length,
    description: `
      JavaScript — это язык программирования, который используется 
      для создания интерактивных и динамичных элементов на 
      веб-страницах, таких как анимации, обработка форм и многое другое.
    `,
    icon: JsIcon,
    link: "/courses/javascript",
    largeDescription: `
      JavaScript — язык программирования, который отвечает за интерактивность 
      на веб-страницах. С помощью JS можно создавать динамичные интерфейсы, 
      работать с данными в реальном времени, обрабатывать события и взаимодействовать 
      с пользователем. В этом курсе вы научитесь основам JavaScript, от работы с 
      переменными и функциями до взаимодействия с API и манипуляций с DOM. 
      Вы сможете создавать динамичные и интерактивные страницы, которые будут 
      реагировать на действия пользователя, как приложения.
    `,
  },
  git: {
    unavailable: true,
    title: "Git",
    lessons: getLessons(programs.git).length,
    description: `
      Git — это система контроля версий, которая помогает разработчикам 
      отслеживать изменения в коде и работать над проектами совместно, 
      синхронизируя изменения между несколькими участниками.
    `,
    icon: GitIcon,
    link: "/courses/git",
    largeDescription: `
      Git — система контроля версий, которая позволяет отслеживать изменения 
      в коде, работать над проектом командой и легко управлять версиями файлов. 
      С Git разработчики могут эффективно обмениваться кодом и работать совместно, 
      а также хранить историю изменений и восстанавливать предыдущие версии. 
      В этом курсе вы освоите основные команды Git, научитесь работать с репозиториями, 
      ветками и слияниями, а также узнаете, как использовать GitHub для совместной работы 
      над проектами.
    `,
  },
  tailwind: {
    unavailable: true,
    title: "Tailwind",
    lessons: getLessons(programs.tailwind).length,
    description: `
      Tailwind CSS — это фреймворк для создания пользовательских интерфейсов 
      с помощью утилитарных классов. Он позволяет быстро разрабатывать стили 
      без необходимости писать кастомный CSS.
    `,
    icon: TailwindIcon,
    link: "/courses/tailwind",
    largeDescription: `
      Tailwind CSS — это утилитарный CSS-фреймворк, который позволяет создавать 
      стили быстро и эффективно. Вместо того чтобы писать длинные CSS-классы, 
      Tailwind предлагает небольшие, переиспользуемые классы для каждого отдельного 
      свойства. В этом курсе вы научитесь использовать Tailwind для создания адаптивных 
      и стильных интерфейсов, улучшая производительность разработки и кодовую читаемость. 
      Вы освоите концепции утилитарных классов и научитесь проектировать интерфейсы 
      с помощью гибких и мощных инструментов Tailwind.
    `,
  },
  nodejs: {
    unavailable: true,
    title: "Node JS",
    lessons: getLessons(programs.nodejs).length,
    description: `
      Node.js — это серверная среда выполнения JavaScript, основанная на 
      движке V8 от Google Chrome. Она используется для разработки масштабируемых 
      и высокоэффективных серверных приложений.
    `,
    icon: NodejsIcon,
    link: "/courses/nodejs",
    largeDescription: `
      Node.js — это среда выполнения для JavaScript, которая позволяет запускать 
      код на сервере. Это не просто серверный JavaScript, а полноценная платформа 
      для создания серверных приложений. В этом курсе вы научитесь работать с 
      Node.js для создания веб-серверов, API и обработки запросов от клиентов. 
      Вы освоите основы работы с модулями, асинхронность в Node.js и научитесь 
      интегрировать серверное приложение с базами данных и другими сервисами.
    `,
  },
  react: reactCourse,
  typescript: {
    unavailable: true,
    title: "TypeScript",
    lessons: getLessons(programs.typescript).length,
    description: `
      TypeScript — это надмножество JavaScript, которое добавляет поддержку 
      статической типизации. Это помогает разработчикам обнаруживать ошибки 
      на ранних стадиях разработки и улучшает автозавершение кода в редакторах.
    `,
    icon: TsIcon,
    link: "/courses/typescript",
    largeDescription: `
      TypeScript — это язык программирования, который является надстройкой 
      над JavaScript и добавляет статическую типизацию. Он позволяет выявлять 
      ошибки на этапе разработки, улучшая поддержку больших и сложных приложений. 
      В этом курсе вы научитесь основам TypeScript, разберетесь в типах данных, 
      интерфейсах и классах, а также научитесь интегрировать TypeScript в проекты 
      для улучшения стабильности и производительности вашего кода.
    `,
  },
  redux: {
    unavailable: true,
    title: "Redux",
    lessons: getLessons(programs.redux).length,
    description: `
      Redux — это библиотека для управления состоянием в JavaScript-приложениях. 
      Она помогает централизованно управлять состоянием и упрощает обмен данными 
      между компонентами в приложении.
    `,
    icon: ReduxIcon,
    link: "/courses/redux",
    largeDescription: `
      Redux — это библиотека для управления состоянием в приложениях на JavaScript, 
      особенно популярных в связке с React. Redux помогает централизованно хранить 
      состояние приложения и управлять им с помощью предсказуемых функций. В этом курсе 
      вы узнаете, как использовать Redux для управления состоянием, научитесь работать с 
      экшенами, редьюсерами и стором. Вы сможете создавать масштабируемые и легко тестируемые 
      приложения, где каждое изменение состояния будет отслеживаться и логироваться.
    `,
  },
  firebase: {
    unavailable: true,
    title: "Firebase",
    lessons: getLessons(programs.firebase).length,
    description: `
      Firebase — это платформа от Google для разработки мобильных и веб-приложений. 
      Она предоставляет решения для аутентификации, хранения данных, аналитики и 
      многого другого.
    `,
    icon: FirebaseIcon,
    link: "/courses/firebase",
    largeDescription: `
      Firebase — это платформа для разработки мобильных и веб-приложений от Google. 
      Она предоставляет инструменты для аутентификации пользователей, хранения данных, 
      аналитики и многого другого. В этом курсе вы научитесь использовать Firebase для 
      быстрого создания серверной части приложений, интеграции с базами данных в реальном 
      времени, а также добавления функций аутентификации и авторизации. Вы сможете создавать 
      безопасные и масштабируемые приложения, использующие возможности Firebase для работы 
      с данными и пользователями в реальном времени.
    `,
  },
};

export const coursesKeys = Object.keys(courses);
