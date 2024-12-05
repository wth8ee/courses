import { LessonLayout } from "../../../components/LessonLayout";
import { CodeExample } from "../../../components/CodeExample";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { delay } from "../../../model/delay";
import { createRoot } from "react-dom/client";
import { transform } from "@babel/standalone";
import { extractComponent } from "../../../model/extractComponent";

export function Lesson4({ program, lessonId, progress }) {
  const [root, setRoot] = useState(null);

  const value1 = `function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
  }`;

  const value2 = `function App() {
    return <Greeting name="React Developer" />;
  }`;

  const value3 = `function Greeting({ name }) {
    return <h1>Hello, {name}!</h1>;
  }`;

  function testCodeForComponent(code) {
    const regex = /function\s+\w+\(\{([^}]+)\}\)/;
    const match = code.match(regex);

    if (match) {
      const props = match[1].split(",").map(prop => prop.trim());
      if (props.includes("userName")) {
        return true;
      }
    }

    return false;
  }

  function testCodeForCall(code) {
    const regex = /<Welcome\s+userName\s*=\s*['"](.*)['"]\s*\/>/;

    const match = code.match(regex);

    if (match && match[1]) {
      return match[1];
    }

    return null;
  }

  async function test(code) {
    let userName = null;

    try {
      const compiler = document.getElementById("compiler");
      if (root) {
        root.unmount();
        setRoot(null);
      }

      const componentString = extractComponent(code);
      const whatsLeft = code.replace(componentString, "");

      userName = testCodeForCall(whatsLeft);
      console.log(userName);

      console.log(componentString);

      const transformedCode = transform(componentString, {
        presets: ["react"],
      }).code;

      const isValidProp = testCodeForComponent(transformedCode);

      const Component = eval(`(${transformedCode})`);
      if (typeof Component === "function") {
        const newRoot = createRoot(compiler);
        setRoot(newRoot);
        if (userName) {
          newRoot.render(<Component React={React} userName={userName} />);
        } else {
          newRoot.render(<Component React={React} />);
        }
      }

      if (!isValidProp) {
        console.log("Компонент не принимает пропс userName.");
        return false;
      }

      if (!userName) {
        console.log("Компонент не вызван с пропсом userName.");
        return false;
      }

      await delay(50);

      const elem = compiler.children?.[0];
      if (elem?.textContent == `Welcome, ${userName}!`) {
        return true;
      }
    } catch (err) {
      console.log(err);
    }

    return false;
  }

  return (
    <LessonLayout
      redux
      lessonId={lessonId}
      program={program}
      progress={progress}
      left={
        <>
          <p className="mb-5 text-adpt">
            В этом уроке мы создадим первый компонент на React, научимся
            использовать <span className="hl">props</span> для передачи данных в
            компоненты и рендерить их в DOM.
          </p>

          <p className="mb-5 text-adpt">
            Компоненты — это строительные блоки React-приложений. В React
            компоненты представляют собой функции или классы, которые возвращают
            описание того, как должен выглядеть интерфейс. Мы будем использовать
            функциональные компоненты.
          </p>

          <p className="mb-5 text-adpt">
            Рассмотрим пример простого компонента, который выводит приветствие:
          </p>

          <CodeExample code={value1} className="mb-5" jsx />

          <div>
            <p className="mb-5 text-adptmd hl">Объяснение кода:</p>
            <ul className="list-ul flex flex-col gap-5 ml-5 mb-5">
              <li>
                Мы создаем компонент <code>Greeting</code>, который принимает
                <code>props</code> и возвращает JSX. В этом примере мы передаем
                значение <code>name</code> в качестве пропса.
              </li>
              <li>
                Использование <code>{`{props.name}`}</code> позволяет
                динамически вставлять значение переменной в наш компонент.
              </li>
            </ul>
          </div>

          <p className="mb-5 text-adpt">
            Теперь давайте создадим компонент <code>App</code>, который будет
            использовать компонент <code>Greeting</code>:
          </p>

          <CodeExample code={value2} className="mb-5" jsx />

          <div>
            <p className="mb-5 text-adptmd hl">Объяснение кода:</p>
            <ul className="list-ul flex flex-col gap-5 ml-5 mb-5">
              <li>
                Компонент <code>App</code> использует компонент{" "}
                <code>Greeting</code> и передает ему значение пропса{" "}
                <code>name="React Developer"</code>.
              </li>
              <li>
                Компонент <code>Greeting</code> получает этот пропс и отображает
                соответствующее сообщение.
              </li>
            </ul>
          </div>

          <p className="mb-5 text-adpt">
            Важно отметить, что <span className="hl">props</span> — это
            неизменяемые данные, которые передаются в компоненты. Компоненты
            React могут быть либо функциональными, либо классовыми. В нашем
            случае мы использовали функциональные компоненты, потому что они
            более просты и часто применяются в современных приложениях.
          </p>

          <p className="mb-5 text-adpt">
            Рассмотрим способ деструктурирования пропсов, который позволяет
            упростить доступ к значениям пропсов прямо в параметрах функции
            компонента:
          </p>

          <CodeExample code={value3} className="mb-5" jsx />

          <div>
            <p className="mb-5 text-adptmd hl">
              Объяснение деструктурирования:
            </p>
            <ul className="list-ul flex flex-col gap-5 ml-5 mb-5">
              <li>
                Вместо того чтобы обращаться к пропсам через{" "}
                <code>props.name</code>, мы деструктурируем объект{" "}
                <code>props</code> и сразу получаем доступ к значению пропса{" "}
                <code>name</code> внутри функции компонента.
              </li>
              <li>
                Это сокращает код и делает его более читаемым, особенно если вам
                нужно передать несколько пропсов.
              </li>
            </ul>
          </div>

          <p className="mb-5 text-adpt">
            Следующий шаг — это рендеринг компонентов в браузер. В React для
            этого используется метод <code>ReactDOM.render</code> или в более
            новых версиях React — метод <code>createRoot().render()</code>.
          </p>

          <p className="mb-5 text-adpt">
            Для рендеринга компонента в DOM мы используем следующий код:
          </p>

          <CodeExample
            jsx
            code={`const root = document.getElementById('root');
createRoot(root).render(<App />);`}
            className="mb-5"
          />

          <p className="mb-5 text-adpt">
            Теперь, когда вы создали компоненты, их можно рендерить на
            веб-странице, что позволяет пользователю увидеть ваше приложение.
          </p>

          <p className="mb-5 text-adpt">
            Следующий шаг — создание простого компонента, который вы будете
            использовать в следующем упражнении.
          </p>
        </>
      }
      task={
        <>
          <p className="mb-2">
            Напишите компонент <code>Welcome</code>, который отображает
            приветствие, используя пропс <code>userName</code>: "Welcome,
            [userName]!".
          </p>
          <p className="mb-2">
            Вызовите компонент и передайте в него имя пользователя.
          </p>
        </>
      }
      test={test}
    />
  );
}
