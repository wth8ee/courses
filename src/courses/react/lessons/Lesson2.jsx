import { LessonLayout } from "../../../components/LessonLayout";
import { CodeExample } from "../../../components/CodeExample";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { delay } from "../../../model/delay";

export function Lesson2({ program, lessonId, progress }) {
  const [root, setRoot] = useState(null);

  const value = `// Устанавливаем React и ReactDOM
// Через npm или yarn в командной строке
// npm install react react-dom

import React from 'react';
import ReactDOM from 'react-dom';

// Компонент для отображения приветствия
function App() {
  return <h1>Я настроил окружение для React!</h1>;
}

// Рендерим компонент в DOM
ReactDOM.render(<App />, document.getElementById('root'));`;

  const test = async code => {
    try {
      const compiler = document.getElementById("compiler");
      if (root) {
        root.unmount();
        setRoot(null);
      }

      compiler.innerHTML = "";
      const transformedCode = transform(code, { presets: ["react"] }).code;

      const Component = eval(`(${transformedCode})`);

      if (typeof Component === "function") {
        const newRoot = createRoot(compiler);
        setRoot(newRoot);
        newRoot.render(<Component React={React} />);
      }
    } catch (err) {
      console.error(err);
    }

    await delay(50);
    const elem = compiler.children?.[0];
    return (
      elem?.tagName == "H1" &&
      elem?.textContent == "Я настроил окружение для React!"
    );
  };

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
          <ol className="text-adpt list-decimal list-ul flex flex-col gap-5">
            <li>
              <p className="mb-5">
                <p className="mb-2 hl">Выбор редактора кода</p>
                Для начала работы с React нам понадобится редактор кода. Мы
                рекомендуем использовать Visual Studio Code (VS Code) — это
                мощный и удобный редактор, который имеет множество расширений
                для работы с JavaScript и React.
              </p>
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
              <p className="mb-5">
                <p className="mb-2 hl">Установка Node.js и npm</p>
                Для работы с React необходимо установить Node.js — это среда для
                выполнения JavaScript на серверной стороне. С Node.js также
                поставляется менеджер пакетов npm (или альтернативно, yarn),
                который используется для установки библиотек и инструментов.
              </p>
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
                  <CodeExample
                    code={`node -v
npm -v`}
                  />
                </li>
              </ul>
            </li>
          </ol>
        </>
      }
      task={
        <>
          <p className="mb-2">
            Убедитесь, что вы установили React и настроили окружение. Затем
            создайте компонент, который отображает сообщение "Я настроил
            окружение для React!".
          </p>
        </>
      }
      test={test}
    />
  );
}
