import { LessonLayout } from "../../../components/LessonLayout";
import { CodeExample } from "../../../components/CodeExample";
import { getElements } from "../../../model/getElements";

export function Lesson1({ program, lessonId }) {
  const value = `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Заголовок</title>
</head>
<body>
    <h1>Заголовок первого уровня</h1>
    <p>Абзац</p>
</body>
</html>`;

  const value2 = `<h1>Заголовок</h1>
<p>Абзац</p>`;

  const test = () => {
    const children = getElements();
    return children[0]?.tagName === "H1" && children?.[1].tagName === "P";
  };

  return (
    <LessonLayout
      lessonId={lessonId}
      program={program}
      left={
        <>
          <p className="mb-5 text-adpt">
            HTML (HyperText Markup Language) — это язык разметки, который
            используется для создания и структуры веб-страниц. Каждый раз, когда
            мы открываем сайт, браузер использует HTML для того, чтобы
            отображать текст, изображения, ссылки, формы и другие элементы. HTML
            представляет собой набор тегов, которые определяют, как браузер
            должен отображать содержимое на странице.
          </p>
          <p className="mb-5 text-adpt">
            Когда вы открываете любую веб-страницу, в действительности вы видите
            текст, который был описан с помощью HTML-разметки. Например, если на
            странице есть заголовок или параграф, то для этого используется
            специальный тег, который сообщает браузеру, как именно эти элементы
            должны быть отображены.
          </p>
          <p className="mb-2 text-adpt">Вот пример простой HTML-страницы:</p>
          <CodeExample code={value} className="mb-5" />
          <div>
            <p className="mb-2">В этом примере:</p>
            <ul className="list-disc ml-5 mb-5">
              <li>
                Тег <code>&lt;h1&gt;</code> используется для создания заголовка
                первого уровня.
              </li>
              <li>
                Тег <code>&lt;p&gt;</code> используется для создания абзаца
                текста.
              </li>
              <li>
                Тег <code>&lt;html&gt;</code> определяет весь HTML-документ.
              </li>
              <li>
                Тег <code>&lt;meta&gt;</code> содержит метаинформацию о
                странице, такую как кодировка и название.
              </li>
              <li>
                Тег <code>&lt;body&gt;</code> — это основной контейнер, в
                котором находится весь видимый контент страницы.
              </li>
            </ul>
            <p className="mb-5 text-adpt">
              HTML является основой для создания всех веб-страниц. В дальнейшем
              вы будете изучать, как добавлять изображения, ссылки, таблицы и
              формы, а также как улучшить структуру с помощью новых возможностей
              HTML5.
            </p>
          </div>
        </>
      }
      task={
        <>
          <p className="mb-2">
            Вставьте следующий код в редактор на сайте и измените текст в
            заголовке и абзаце.
          </p>
          <CodeExample code={value2} />
        </>
      }
      test={test}
    />
  );
}
