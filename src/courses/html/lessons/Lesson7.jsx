import { LessonLayout } from "../../../components/LessonLayout";
import { CodeExample } from "../../../components/CodeExample";
import { getElements } from "../../../model/getElements";

export function Lesson7({ program, lessonId }) {
  const test = () => {
    const children = getElements();
    const firstChildChildren = children?.[0]?.children
      ? Array.from(children[0]?.children)
      : null;
    const secondChildChildren = children?.[1]?.children
      ? Array.from(children[1]?.children)
      : null;
    return (
      children[0]?.tagName === "BLOCKQUOTE" &&
      children[1]?.tagName === "PRE" &&
      children[2]?.tagName === "CODE"
    );
  };

  return (
    <LessonLayout
      lessonId={lessonId}
      program={program}
      left={
        <>
          <p className="mb-5 text-adpt">
            В HTML можно использовать специальные теги для оформления цитат и
            блоков кода. Эти элементы помогают организовать контент и улучшить
            его восприятие на странице.
          </p>

          {/* Тег <blockquote> — Цитата */}
          <h2 className="mb-3">
            Тег <b>blockquote</b> — Цитата
          </h2>
          <p className="mb-5 text-adpt">
            Тег <b>blockquote</b> используется для выделения цитат или длинных
            отрывков текста, часто с ссылкой на источник. Обычно текст в этом
            элементе отображается с отступами.
          </p>
          <CodeExample
            code={`<blockquote>
  <p>HTML позволяет структурировать текст и делать его более читабельным.</p>
</blockquote>`}
            className="mb-5"
          />

          {/* Тег <pre> — Форматированный текст */}
          <h2 className="mb-3">
            Тег <b>pre</b> — Форматированный текст
          </h2>
          <p className="mb-5 text-adpt">
            Тег <b>pre</b> используется для отображения предварительно
            отформатированного текста, где сохраняются все пробелы, отступы и
            переносы строк. Он часто используется для отображения кода.
          </p>
          <CodeExample
            code={`<pre>
function helloWorld() {
  console.log('Hello, World!');
}
</pre>`}
            className="mb-5"
          />

          {/* Тег <code> — Вставка кода */}
          <h2 className="mb-3">
            Тег <b>code</b> — Вставка кода
          </h2>
          <p className="mb-5 text-adpt">
            Тег <b>code</b> используется для выделения коротких фрагментов кода,
            которые обычно отображаются с моноширинным шрифтом.
          </p>
          <CodeExample
            code={`<p>Используйте тег <code> для выделения кода.</code></p>`}
            className="mb-5"
          />
        </>
      }
      task={
        <>
          <p className="mb-2">Создайте страницу, которая будет содержать:</p>
          <ol className="list-disc ml-5 mb-5 list-decimal">
            <li>
              Цитату с использованием тега <code>&lt;blockquote&gt;</code>.
            </li>
            <li>
              Фрагмент кода с использованием тега <code>&lt;pre&gt;</code>.
            </li>
            <li>
              Кодовое слово с использованием тега <code>&lt;code&gt;</code>.
            </li>
          </ol>
        </>
      }
      test={test}
    />
  );
}
