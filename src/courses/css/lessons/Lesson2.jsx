import { CodeExample } from "../../../components/CodeExample";
import { CssResult } from "../../../components/CssResult";
import { LessonLayout } from "../../../components/LessonLayout";
import { getElements } from "/src/model/getElements";

export function Lesson2({ program, lessonId, progress }) {
  const test = () => {
    const element = Array.from(getElements())?.[1];
    const isH1 = element?.tagName == "H1";
    const hasClass = element?.classList?.contains("violet-text");
    const text = element?.textContent;
    const color = getComputedStyle(element)?.color;
    const matches = color == "rgb(98, 0, 255)";
    return isH1 && hasClass && text && matches;
  };

  return (
    <LessonLayout
      test={test}
      lessonId={lessonId}
      program={program}
      progress={progress}
      task={
        <>
          <p className="mb-2">
            Создайте &lt;h1&gt; с произвольным текстом и классом{" "}
            <code>violet-text</code>.
          </p>
          <p>
            В классе <code>violet-text</code> цвету задайте значение{" "}
            <code>rgb(98, 0, 255)</code>.
          </p>
        </>
      }
      left={
        <>
          <p>
            В этом уроке мы рассмотрим три основных типа CSS-селекторов:
            универсальный, по ID и по классу. Эти селекторы позволяют
            нацеливаться на HTML-элементы и применять к ним стили.
          </p>

          <h3>Синтаксис CSS</h3>
          <p>CSS состоит из селектора, свойства и значения:</p>
          <CodeExample
            cs
            code={`selector {
  property: value;
}`}
          />
          <p>Пример:</p>
          <CodeExample
            cs
            code={`p {
  color: red;
}`}
          />
          <p>
            Этот код делает текст внутри всех элементов <code>&lt;p&gt;</code>{" "}
            красным.
          </p>

          <h3>1. Универсальный селектор (*)</h3>
          <p>
            Универсальный селектор применяется ко всем элементам на странице. Он
            полезен для обнуления отступов или задания глобальных стилей.
          </p>
          <CodeExample
            cs
            code={`* {
  margin: 0;
  padding: 0;
}`}
          />
          <p>
            Этот код обнуляет внешние и внутренние отступы у всех элементов на
            странице.
          </p>

          <h3>
            2. Селектор по ID (<code>#id</code>)
          </h3>
          <p>
            Селектор по ID применяется к одному элементу с уникальным атрибутом{" "}
            <code>id</code>.
          </p>

          <div>
            <p className="mb-2">HTML:</p>
            <CodeExample code={`<div id="header">Welcome!</div>`} />
          </div>

          <div>
            <p className="mb-2">CSS:</p>
            <CodeExample
              cs
              code={`#header {
  background-color: lightblue;
  font-size: 24px;
  color: black;
}`}
            />
          </div>

          <div>
            <p className="mb-2">Вывод:</p>
            <CssResult
              html={`<div id="header">Welcome!</div>`}
              css={`
                #header {
                  background-color: lightblue;
                  font-size: 24px;
                  color: black;
                }
              `}
            />
          </div>

          <p>
            Здесь стиль применяется только к элементу с <code>id="header"</code>
            . ID уникален, поэтому каждый элемент с этим идентификатором должен
            встречаться только один раз на странице.
          </p>

          <h3>3. Селектор по классу (.class)</h3>
          <p>
            Селектор по классу применяется ко всем элементам с указанным
            классом. Классы можно использовать для группировки нескольких
            элементов.
          </p>

          <div>
            <p className="mb-2">HTML:</p>
            <CodeExample
              code={`<p class="highlight">This is highlighted.</p>`}
            />
          </div>

          <div>
            <p className="mb-2">CSS:</p>
            <CodeExample
              cs
              code={`.highlight {
  background-color: yellow;
  font-weight: bold;
  color: black;
}`}
            />
          </div>

          <div>
            <p className="mb-2">Вывод:</p>
            <CssResult
              css={`
                .highlight {
                  background-color: yellow;
                  font-weight: bold;
                  color: black;
                }
              `}
              html={`<p class="highlight">This is highlighted.</p>`}
            />
          </div>
        </>
      }
    />
  );
}
