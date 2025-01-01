import { NpmIcon } from "../../icons/NpmIcon"
import { getLessons } from "../../model/getLessons"
import { programs } from "../programs"

export const npmCourse = {
    unavailable: true,
    title: "NPM",
    lessons: getLessons(programs.npm).length,
    description: `
      NPM — это менеджер пакетов для JavaScript, который используется 
      для управления зависимостями и пакетов в проектах.
    `,
    icon: NpmIcon,
    link: "/courses/npm",
    largeDescription: `
      NPM — это инструмент, который позволяет управлять зависимостями в JavaScript-проектах. 
      Он используется для установки, обновления и удаления пакетов, а также для упрощения 
      распространения библиотек и инструментов. В этом курсе вы научитесь работать с NPM, 
      создавая и управляя зависимостями, используя пакеты и скрипты для автоматизации задач. 
      Вы сможете настроить NPM для вашего проекта и научитесь оптимизировать процессы разработки с помощью этого инструмента.
    `,
  }
