import { LessonLayout } from "../../../components/LessonLayout";
import { CodeExample } from "../../../components/CodeExample";
import React, { useState } from "react";
import { transform } from "@babel/standalone";
import { delay } from "../../../model/delay";
import { createRoot } from "react-dom/client";

export function Lesson3({ program, lessonId, progress }) {
  const [root, setRoot] = useState(null);

  const value = `function App() {
  const name = "React";
  return <h1>Hello, {name}!</h1>;
}`;

  const testCodeForTechnology = code => {
    const regex = /const\s+technology\s*=\s*['"](.*)['"]/;

    const match = code.match(regex);

    if (match && match[1]) {
      return match[1];
    } else {
      return null;
    }
  };

  const test = async code => {
    let technology = null;
    try {
      const compiler = document.getElementById("compiler");
      if (root) {
        root.unmount();
        setRoot(null);
      }

      const transformedCode = transform(code, { presets: ["react"] }).code;

      technology = testCodeForTechnology(code);
      if (technology) {
        console.log(
          `Найдена переменная technology со значением: ${technology}`
        );
      }

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
    if (!technology) {
      return;
    }
    return (
      elem?.tagName == "H1" && elem?.textContent.includes(`Я учу ${technology}`)
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
          <p>
            <span className="hl">JSX (JavaScript XML)</span> — это
            синтаксический сахар для React, который позволяет писать код, очень
            похожий на HTML. Он позволяет разработчикам создавать компоненты с
            использованием HTML-подобного синтаксиса прямо в JavaScript-коде.
            Это упрощает создание интерфейсов и улучшает читаемость кода.
          </p>

          <p>
            JSX выглядит как HTML, но на самом деле это JavaScript, который
            транслируется в реальный код React. Когда вы пишете JSX, React
            использует JavaScript для того, чтобы динамически обновлять
            содержимое компонентов.
          </p>

          <p>Рассмотрим пример простого компонента с JSX:</p>

          <CodeExample code={value} jsx />

          <div>
            <p className="mb-8 text-adptmd hl">В этом примере:</p>
            <ul className="list-ul flex flex-col gap-4 ml-8 mb-8">
              <li>
                JSX позволяет легко вставлять JavaScript-переменные в
                HTML-подобный код. В примере используется переменная{" "}
                <code>name</code> внутри JSX-элемента.
              </li>
              <li>
                Внутри JSX можно вставлять любые выражения JavaScript, окружив
                их фигурными скобками.
              </li>
              <li>
                JSX также поддерживает использование стандартных HTML-атрибутов,
                но с некоторыми особенностями. Например, атрибут{" "}
                <code>class</code> в HTML заменен на <code>className</code> в
                JSX.
              </li>
            </ul>

            <p>
              JSX делает код React более читаемым и удобным, позволяя работать с
              компонентами и состоянием через обычный JavaScript, но с
              возможностью использования синтаксиса, знакомого из HTML.
            </p>
          </div>

          <p>
            JSX автоматически преобразуется в JavaScript-код при сборке проекта.
            Это преобразование происходит через такие инструменты, как Babel. В
            результате JSX-код превращается в вызовы{" "}
            <code>React.createElement</code>, который отвечает за создание
            элементов React.
          </p>

          <p>
            Важно помнить, что JSX не является обязательным для использования в
            React. Это всего лишь удобство для работы с элементами, и в проекте
            можно использовать только чистый JavaScript.
          </p>

          <p className="text-adptmd hl">
            Вот основные правила и особенности синтаксиса JSX:
          </p>

          <ul className="list-ul ml-8 flex flex-col gap-4">
            <li>
              JSX должен быть внутри одного родительского элемента. Например,
              если вы хотите вернуть несколько элементов, их нужно обернуть в{" "}
              <code>&lt;div&gt;</code> или другие контейнерные элементы.
            </li>
            <li>
              Используйте фигурные скобки <code>{}</code> для вставки выражений
              JavaScript в JSX.
            </li>
            <li>
              Атрибуты в JSX записываются в camelCase (например,{" "}
              <code>className</code> вместо <code>class</code>,{" "}
              <code>htmlFor</code> вместо <code>for</code>).
            </li>
            <li>
              В JSX нельзя использовать ключевые слова JavaScript, такие как{" "}
              <code>class</code> или <code>for</code>, поскольку они уже
              зарезервированы в языке.
            </li>
            <li>
              В JSX необходимо закрывать все теги, даже если они пустые.
              Например, <code>&lt;br /&gt;</code>, <code>&lt;img /&gt;</code>.
            </li>
            <li>
              JSX поддерживает комментарии, но они должны быть внутри фигурных
              скобок: <code>{`{/* comment */}`}</code>.
            </li>
          </ul>
        </>
      }
      task={
        <>
          <p className="mb-4">
            Создайте компонент <code>ILearn</code>, который возвращает JSX с
            сообщением, "Я учу [технология]", использующим переменную для
            названия технологии. Например, "Я учу CSS".
          </p>
          <p>
            Для этого используйте переменную <code>technology</code> и вставьте
            ее в JSX внутри тега <code>&lt;h1&gt;</code>.
          </p>
        </>
      }
      test={test}
    />
  );
}
