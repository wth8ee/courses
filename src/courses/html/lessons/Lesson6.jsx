import { LessonLayout } from "../../../components/LessonLayout";
import { CodeExample } from "../../../components/CodeExample";
import { getElements } from "../../../model/getElements";

export function Lesson6({ program, lessonId, progress }) {
  const test = () => {
    const children = getElements();
    const firstChildChildren = children?.[0]?.children
      ? Array.from(children[0]?.children)
      : null;
    const secondChildChildren = children?.[1]?.children
      ? Array.from(children[1]?.children)
      : null;
    return (
      children[0]?.tagName === "P" &&
      children[1]?.tagName === "P" &&
      firstChildChildren?.[0]?.tagName === "B" &&
      firstChildChildren?.[1]?.tagName === "I" &&
      firstChildChildren?.[2]?.tagName === "STRONG" &&
      firstChildChildren?.[3]?.tagName === "EM" &&
      secondChildChildren?.[0]?.tagName === "U" &&
      secondChildChildren?.[1]?.tagName === "MARK"
    );
  };

  return (
    <LessonLayout
      lessonId={lessonId}
      program={program}
      progress={progress}
      left={
        <>
          <p className="mb-5 text-adpt">
            В HTML существует множество тегов для стилизации текста. Каждый из
            них имеет свою цель и используется для определённых случаев.
          </p>

          {/* Тег <b> — Жирный текст */}
          <h2 className="mb-3">
            Тег <b>b</b> — Жирный текст
          </h2>
          <p className="mb-5 text-adpt">
            Тег <b>b</b> используется для выделения текста жирным шрифтом. Это
            визуальное изменение, не добавляющее дополнительного семантического
            значения. Обычно применяется для выделения элементов текста без
            изменения их смысла.
          </p>
          <CodeExample
            code={`<p><b>Это пример жирного текста, использующего тег <b></b></b></p>`}
            className="mb-5"
          />

          {/* Тег <i> — Курсив */}
          <h2 className="mb-3">
            Тег <i>i</i> — Курсив
          </h2>
          <p className="mb-5 text-adpt">
            Тег <i>i</i> применяется для отображения текста курсивом. Курсив
            может использоваться для выделения текста в контексте цитат,
            иностранных слов или терминов.
          </p>
          <CodeExample
            code={`<p><i>Это пример текста, выделенного с помощью тега <i></i></i></p>`}
            className="mb-5"
          />

          {/* Тег <strong> — Важный текст */}
          <h2 className="mb-3">
            Тег <strong>strong</strong> — Важный текст
          </h2>
          <p className="mb-5 text-adpt">
            Тег <strong>strong</strong> используется для выделения текста с
            акцентом на важность. Текст с этим тегом обычно отображается жирным,
            и имеет более высокое значение с точки зрения семантики.
          </p>
          <CodeExample
            code={`<p><strong>Это пример важного текста, использующего тег <strong></strong></strong></p>`}
            className="mb-5"
          />

          {/* Тег <em> — Акцент */}
          <h2 className="mb-3">
            Тег <em>em</em> — Акцент
          </h2>
          <p className="mb-5 text-adpt">
            Тег <em>em</em> применяется для выделения текста с акцентом.
            Визуально текст становится курсивным и выделяется акцентом,
            показывая его важность в контексте.
          </p>
          <CodeExample
            code={`<p><em>Это пример текста с акцентом, использующего тег <em></em></p>`}
            className="mb-5"
          />

          {/* Тег <u> — Подчеркивание */}
          <h2 className="mb-3">
            Тег <u>u</u> — Подчеркивание
          </h2>
          <p className="mb-5 text-adpt">
            Тег <u>u</u> используется для создания подчеркивания текста. Однако
            важно помнить, что подчеркивание может быть конфликтным в случае с
            гиперссылками, которые тоже часто используют подчеркивание.
          </p>
          <CodeExample
            code={`<p><u>Это пример подчеркнутого текста, использующего тег <u></u></p>`}
            className="mb-5"
          />

          {/* Тег <mark> — Выделение фоном */}
          <h2 className="mb-3">
            Тег <mark>mark</mark> — Выделение фоном
          </h2>
          <p className="mb-5 text-adpt">
            Тег <mark>mark</mark> используется для выделения текста фоном. Это
            полезно, например, для акцентирования важной информации, фраз или
            слов.
          </p>
          <CodeExample
            code={`<p><mark>Это пример текста, выделенного фоном с помощью тега <mark></mark></mark></p>`}
            className="mb-5"
          />
        </>
      }
      task={
        <>
          <p className="mb-2">Создайте два параграфа, содержащие:</p>
          <ol className="list-disc ml-5 mb-5 list-decimal">
            <li>Жирный, курсивный, жирный (важный) и акцентированный текст</li>
            <li>Подчеркнутый и выделенный задним фоном текст</li>
          </ol>
        </>
      }
      test={test}
    />
  );
}
