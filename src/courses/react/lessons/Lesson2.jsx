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
          <p className="mb-5 text-adpt">
            Для начала работы с React необходимо установить соответствующие
            инструменты и настроить окружение. В этом уроке мы рассмотрим, как
            настроить окружение для разработки на React.
          </p>

          <p className="mb-5 text-adpt">
            Для начала нам нужно установить Node.js и менеджер пакетов npm или
            yarn. Node.js — это среда для выполнения JavaScript-кода вне
            браузера, а npm (или yarn) позволяет устанавливать необходимые
            пакеты для проекта.
          </p>

          <p className="mb-5 text-adpt">Шаги для установки:</p>

          <ul className="list-disc ml-5 mb-5">
            <li>
              Скачайте и установите Node.js с официального сайта:
              https://nodejs.org/.
            </li>
            <li>
              После установки Node.js в командной строке будет доступна утилита{" "}
              <code>npm</code>, которая используется для установки пакетов.
            </li>
            <li>
              Если вы хотите использовать yarn, установите его с помощью
              команды: <code>npm install --global yarn</code>.
            </li>
          </ul>

          <p className="mb-5 text-adpt">
            После установки Node.js и npm или yarn вы можете создать новый
            проект с помощью команды <code>npx create-react-app my-app</code>,
            которая автоматически установит все необходимые зависимости для
            работы с React.
          </p>

          <p className="mb-5 text-adpt">
            Пример кода для приложения после установки:
          </p>

          <CodeExample code={value} className="mb-5" jsx />

          <div>
            <p className="mb-2">В этом примере:</p>
            <ul className="list-disc ml-5 mb-5">
              <li>Мы установили React и ReactDOM с помощью npm (или yarn).</li>
              <li>
                Создали компонент <code>App</code>, который выводит сообщение,
                подтверждающее успешную настройку окружения.
              </li>
              <li>
                Используем метод <code>ReactDOM.render</code> для отображения
                компонента в элементе с id <code>root</code> на странице.
              </li>
            </ul>
          </div>

          <p className="mb-5 text-adpt">
            Это базовая настройка, с которой начинается работа над проектом на
            React. В следующих уроках мы подробнее рассмотрим, как строить
            компоненты и работать с состоянием.
          </p>
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
