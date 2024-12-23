import { LessonLayout } from "../../../components/LessonLayout";
import { CodeExample } from "../../../components/CodeExample";
import React, { useEffect, useState } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import { transform } from "@babel/standalone";
import { useSelector } from "react-redux";
import { getElements } from "../../../model/getElements";
import { delay } from "../../../model/delay";

export function Lesson1({ program, lessonId, progress }) {
  const [root, setRoot] = useState(null);

  const value = `import React from 'react';
import ReactDOM from 'react-dom';

// Компонент для отображения приветствия
function App() {
  return <h1>Hello, world!</h1>;
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

      compiler.innerHTMl = "";
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
    return elem?.tagName == "H1" && elem?.textContent == "Я учу реакт";
  };

  return (
    <LessonLayout
      redux
      lessonId={lessonId}
      program={program}
      progress={progress}
      left={
        <>
          <p>
            React — это библиотека для создания пользовательских интерфейсов,
            разработанная компанией Facebook. Он позволяет строить интерфейсы с
            использованием компонентов, что делает код более модульным и удобным
            для повторного использования.
          </p>

          <p>
            В отличие от традиционных способов создания интерфейсов с
            использованием обычных HTML и JavaScript, React позволяет обновлять
            интерфейс с помощью концепции Virtual DOM (виртуальный DOM), что
            делает работу с DOM гораздо быстрее и эффективнее.
          </p>

          <p>
            Основная идея React заключается в создании компонентов — это
            независимые блоки кода, которые отвечают за отображение и логику
            интерфейса. Компоненты могут быть как функциональными, так и
            классовыми. В React каждое изменение состояния компонента
            автоматически обновляет только ту часть интерфейса, которая была
            изменена.
          </p>

          <p>
            Что такое компоненты? Компоненты — это блоки, которые могут
            содержать в себе HTML, CSS и JavaScript, и могут быть вложены друг в
            друга.
          </p>

          <p>
            Как работает Virtual DOM? Virtual DOM — это абстракция реального
            DOM, которая позволяет React сравнивать текущие и новые состояния
            интерфейса и минимизировать количество изменений, которые нужно
            внести в реальный DOM. Это повышает производительность приложений,
            особенно при работе с динамическими данными.
          </p>

          <p>Пример простого компонента в React:</p>

          <CodeExample code={value} jsx />

          <p>В этом примере:</p>
          <ul className="list-disc ml-5">
            <li>
              Компонент <code>App</code> — это простой React-компонент, который
              отображает заголовок "Привет, мир!".
            </li>
            <li>
              Для рендеринга компонента используется метод{" "}
              <code>ReactDOM.render</code>, который вставляет компонент в
              элемент с id <code>root</code> на странице.
            </li>
            <li>
              React автоматически управляет состоянием компонента и обновляет
              интерфейс при изменении данных.
            </li>
          </ul>
          <p>
            React помогает разработчикам создавать быстрые и интерактивные
            веб-приложения, и благодаря компонентам код становится более чистым
            и структурированным.
          </p>

          <p>
            Важно отметить, что React работает на основе концепции
            однонаправленного потока данных, где данные передаются от
            родительского компонента к дочерним.
          </p>
        </>
      }
      task={
        <>
          <p>
            Создайте компонент ILearnReact, который возвращает заголовок первого
            уровня с сообщением "Я учу реакт". Рендерить его не нужно.
          </p>
        </>
      }
      test={test}
    />
  );
}
