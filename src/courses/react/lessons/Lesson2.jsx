import { LessonLayout } from "../../../components/LessonLayout";
import { CodeExample } from "../../../components/CodeExample";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { delay } from "../../../model/delay";

export function Lesson2({ program, lessonId, progress }) {
  const [root, setRoot] = useState(null);

  const test = [
    {
      question: "Какой редактор кода рекомендуется для работы с React?",
      options: ["Sublime Text", "Visual Studio Code", "Atom", "Notepad++"],
      answer: 1,
    },
    {
      question:
        "Какую команду нужно выполнить для установки React через Create React App?",
      options: [
        "npm install react",
        "npx create-react-app my-app",
        "npm start",
        "yarn create react-app",
      ],
      answer: 1,
    },
    {
      question:
        "Что содержит файл package.json в проекте, созданном через Create React App?",
      options: [
        "Список всех компонентов",
        "Конфигурацию сборщика",
        "Список зависимостей и метаданные проекта",
        "Все стили проекта",
      ],
      answer: 2,
    },
    {
      question:
        "Какую команду нужно выполнить для создания проекта с помощью Vite?",
      options: [
        "npm create react-app",
        "npx create-vite",
        "npm create vite@latest my-vite-app --template react",
        "npx vite-create-app",
      ],
      answer: 2,
    },
    {
      question:
        "В какой папке находится главный компонент приложения в проекте, созданном с помощью Create React App?",
      options: ["src/components/", "src/", "public/", "node_modules/"],
      answer: 1,
    },
    {
      question:
        "Какой файл используется для рендеринга компонента в DOM в проекте, созданном с помощью Vite?",
      options: ["App.jsx", "main.jsx", "index.js", "index.html"],
      answer: 1,
    },
  ];

  return (
    <LessonLayout
      redux
      lessonId={lessonId}
      program={program}
      progress={progress}
      left={
        <>
          <p className="text-adpt mb-5">
            Прежде чем приступить к написанию кода на React, необходимо
            настроить окружение для разработки. Это включает в себя установку
            редактора кода, настроек для работы с Node.js, npm (или yarn), и
            инструментов для быстрого старта проекта на React. В этом уроке мы
            подробно рассмотрим, как настроить все необходимое для работы с
            React, используя популярные инструменты и практики.
          </p>
          <ol className="text-adpt list-decimal list-ol flex flex-col gap-5 mb-5">
            <li>
              <div className="mb-5">
                <p className="mb-5 hl">Выбор редактора кода</p>
                Для начала работы с React нам понадобится редактор кода. Мы
                рекомендуем использовать Visual Studio Code (VS Code) — это
                мощный и удобный редактор, который имеет множество расширений
                для работы с JavaScript и React.
              </div>
              <ul className="list-disc ml-[20px]">
                <li>
                  <p className="mb-5">
                    <span className="hl">Установка VS Code:</span> Перейдите на
                    официальный сайт VS Code и скачайте версию для вашей
                    операционной системы.
                  </p>
                </li>
                <li>
                  <p className="mb-2 hl">
                    Основные расширения для работы с React:
                  </p>
                  <ul className="list-disc ml-[20px] flex flex-col gap-1">
                    <li>ESLint — для статической проверки кода.</li>
                    <li>Prettier — для форматирования кода.</li>
                    <li>
                      Reactjs Code Snippets — для быстрого написания шаблонов
                      React-компонентов.
                    </li>
                    <li>
                      Bracket Pair Colorizer — для улучшения визуализации
                      скобок.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <div className="mb-5">
                <p className="mb-5 hl">Установка Node.js и npm</p>
                Для работы с React необходимо установить Node.js — это среда для
                выполнения JavaScript на серверной стороне. С Node.js также
                поставляется менеджер пакетов npm (или альтернативно, yarn),
                который используется для установки библиотек и инструментов.
              </div>
              <ul className="list-decimal ml-[20px] flex flex-col gap-5">
                <li>
                  <span className="hl">Установка Node.js:</span> Перейдите на
                  официальный сайт Node.js, скачайте и установите LTS-версию.
                </li>
                <li>
                  <p className="mb-5">
                    <span className="hl">Проверка установки:</span> После
                    установки откройте командную строку и введите команды:
                  </p>
                  <CodeExample code={`node -v\nnpm -v`} />
                </li>
              </ul>
            </li>
            <li>
              <div className="mb-5">
                <p className="hl mb-5">
                  Создание React-приложения с помощью Create React App
                </p>
                <ol className="list-ol flex flex-col gap-5">
                  <li>
                    <p className="mb-5">
                      <span className="hl">Создание проекта:</span> Для создания
                      нового проекта используйте команду:
                    </p>
                    <CodeExample code={`npx create-react-app my-app`} />
                    <p className="pt-5">
                      После выполнения этой команды будет создана папка с именем
                      my-app, содержащая все необходимые файлы и настройки для
                      работы с React.
                    </p>
                  </li>
                  <li>
                    <p className="mb-5">
                      <span className="hl">Запуск приложения:</span> Перейдите в
                      созданную папку и запустите проект:
                    </p>
                    <CodeExample code={`cd my-app\nnpm start`} />
                    <p className="mt-5">
                      Ваше приложение будет доступно по адресу
                      http://localhost:3000.
                    </p>
                  </li>
                  <li>
                    <p className="mb-5 hl">Структура файлов в проекте:</p>
                    <p className="mb-5">
                      Когда вы создаете проект с помощью Create React App,
                      создается следующая структура файлов:
                    </p>
                    <CodeExample
                      code={`csharpCopy codemy-app/
├── node_modules/              # Все установленные зависимости
├── public/                    # Статические файлы
│   ├── index.html             # Главная HTML-страница
│   └── favicon.ico            # Иконка приложения
├── src/                       # Исходный код проекта
│   ├── App.js                 # Главный компонент приложения
│   ├── index.js               # Точка входа, рендерит App в DOM
│   └── index.css              # Стили для всего приложения
├── .gitignore                 # Файлы и папки для игнорирования Git
├── package.json               # Настройки проекта и зависимости
├── package-lock.json          # Точное состояние установленных пакетов
└── README.md                  # Описание проекта`}
                    />
                    <ul className="list-ul mt-5 flex flex-col gap-5">
                      <li>
                        <span className="hl">public/index.html</span> — это
                        основной HTML-файл, который загружается в браузер. React
                        будет рендерить компоненты в элемент с id="root".
                      </li>
                      <li>
                        <span className="hl">src/App.js</span> — главный
                        компонент приложения, который обычно возвращает
                        структуру UI.
                      </li>
                      <li>
                        <span className="hl">src/index.js</span> — точка входа в
                        приложение. Здесь React рендерит компонент App в DOM.
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
            </li>
            <li>
              <p className="hl mb-5">
                Создание React-приложения с помощью Vite
              </p>
              <p className="mb-5">
                Vite — это современный инструмент для сборки, который
                значительно быстрее, чем Create React App, особенно на больших
                проектах.
              </p>
              <ol className="list-ol flex flex-col gap-5">
                <li>
                  <p className="mb-5">
                    <span className="hl">Создание проекта:</span> Чтобы создать
                    проект с помощью Vite, выполните следующую команду:
                  </p>
                  <CodeExample
                    code={`npm create vite@latest my-vite-app --template react`}
                  />
                  <p className="mt-5">
                    Это создаст новый проект с тем же набором инструментов, что
                    и Create React App, но с более быстрой сборкой.
                  </p>
                </li>
                <li>
                  <p className="mb-5">
                    <span className="hl">Запуск приложения:</span> Перейдите в
                    созданную папку и запустите проект:
                  </p>
                  <CodeExample
                    code={`cd my-vite-app\nnpm install\nnpm run dev`}
                  />
                  <p className="mt-5">
                    Приложение будет доступно по адресу http://localhost:5173.
                  </p>
                </li>
                <li>
                  <p className="mb-5 hl">Структура файлов в проекте:</p>
                  <p className="mb-5">
                    Структура файлов в проекте, созданном с помощью Vite, схожа
                    с тем, что создается в Create React App:
                  </p>
                  <CodeExample
                    code={`csharpCopy codemy-vite-app/
├── node_modules/              # Все установленные зависимости
├── public/                    # Статические файлы
│   └── vite.svg               # Логотип Vite
├── src/                       # Исходный код проекта
│   ├── App.jsx                # Главный компонент приложения
│   ├── main.jsx               # Точка входа, рендерит App в DOM
│   └── style.css              # Стили для всего приложения
├── index.html                 # Главная HTML-страница
├── package.json               # Настройки проекта и зависимости
└── vite.config.js             # Конфигурация Vite`}
                  />
                  <ul className="list-ul mt-5 flex flex-col gap-5">
                    <li>
                      <span className="hl">src/main.jsx</span> — точка входа в
                      приложение.
                    </li>
                    <li>
                      <span className="hl">src/App.jsx</span> — главный
                      компонент приложения, аналогичный App.js в Create React
                      App.
                    </li>
                  </ul>
                </li>
              </ol>
            </li>
          </ol>
          <div className="mb-5">
            <p className="mb-5 hl text-adptxl">Заключение</p>
            <p>
              Теперь у вас есть все инструменты для начала разработки на React.
              Вы узнали, как установить и настроить редактор, менеджер пакетов,
              а также как создать приложение с помощью Create React App и Vite.
              В следующем уроке мы более подробно рассмотрим, как работать с
              компонентами и состоянием в React.
            </p>
          </div>
        </>
      }
      task={
        <>
          <p className="mb-2">Пройдите тест по материалам урока.</p>
        </>
      }
      test={test}
    />
  );
}
