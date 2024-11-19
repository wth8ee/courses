import { LessonLayout } from "../../../components/LessonLayout";
import { CodeExample } from "../../../components/CodeExample";
import { getElements } from "../../../model/getElements";

export function Lesson3({ program, lessonId, progress }) {
  const value = `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Базовый HTML-документ</title>
</head>
<body>
    <h1>Заголовок страницы</h1>
    <p>Это простой абзац текста, который демонстрирует структуру базового документа HTML.</p>
</body>
</html>`;

  const test = () => {
    const children = getElements();
    return children[0]?.tagName === "H1" && children[1]?.tagName === "P";
  };

  return (
    <LessonLayout
      lessonId={lessonId}
      program={program}
      progress={progress}
      left={
        <>
          <p className="mb-5 text-adpt">
            Базовый HTML-документ представляет собой структуру, которая является
            основой для создания веб-страниц. Такой документ начинается с
            декларации типа документа (DOCTYPE), указывает на язык разметки и
            содержит несколько обязательных частей: <code>&lt;head&gt;</code> и{" "}
            <code>&lt;body&gt;</code>.
          </p>

          <p className="mb-5 text-adpt">
            Важнейшие части базового HTML-документа:
          </p>
          <ul className="list-disc ml-5 mb-5">
            <li>
              <code>&lt;!DOCTYPE html&gt;</code> — определяет тип документа, в
              данном случае HTML5. Это обязательный элемент в любом современном
              HTML-документе.
            </li>
            <li>
              <code>&lt;html&gt;</code> — корневой элемент документа, который
              оборачивает всю разметку страницы.
            </li>
            <li>
              <code>&lt;head&gt;</code> — раздел, который содержит
              метаинформацию о странице, такую как кодировка символов, настройки
              отображения и название страницы.
            </li>
            <li>
              <code>&lt;meta charset="UTF-8"&gt;</code> — указывает на кодировку
              символов, которая используется на странице (в данном случае
              UTF-8).
            </li>
            <li>
              <code>&lt;title&gt;</code> — тег, который задает название
              страницы, которое отображается на вкладке браузера.
            </li>
            <li>
              <code>&lt;body&gt;</code> — раздел, в котором содержится видимый
              контент страницы. Именно в <code>&lt;body&gt;</code> располагаются
              все теги, которые отображаются пользователю, такие как текст,
              изображения, ссылки и другие элементы.
            </li>
          </ul>

          <p className="mb-5 text-adpt">
            Рассмотрим пример базового HTML-документа:
          </p>
          <CodeExample code={value} className="mb-5" />

          <p className="mb-5 text-adpt">В этом примере:</p>
          <ul className="list-disc ml-5 mb-5">
            <li>
              Тег <code>&lt;html&gt;</code> оборачивает весь HTML-документ.
            </li>
            <li>
              Тег <code>&lt;head&gt;</code> содержит метаинформацию о странице.
            </li>
            <li>
              Тег <code>&lt;meta charset="UTF-8"&gt;</code> указывает на
              кодировку символов страницы.
            </li>
            <li>
              Тег <code>&lt;title&gt;</code> задает название страницы.
            </li>
            <li>
              Тег <code>&lt;body&gt;</code> содержит основной контент, который
              отображается пользователю, в данном случае это заголовок{" "}
              <code>&lt;h1&gt;</code> и параграф <code>&lt;p&gt;</code>.
            </li>
          </ul>

          <p className="mb-5 text-adpt">
            Этот пример демонстрирует минимальный набор элементов для создания
            полноценной HTML-страницы. Каждый тег играет свою роль, и правильная
            структура документа важна для корректного отображения страницы в
            браузере.
          </p>

          <p className="mb-5 text-adpt">
            HTML-документ всегда начинается с декларации типа документа{" "}
            <code>&lt;!DOCTYPE html&gt;</code> и обязательно должен содержать
            разделы <code>&lt;head&gt;</code> и <code>&lt;body&gt;</code>.
            Раздел <code>&lt;head&gt;</code> используется для указания
            метаинформации, а раздел <code>&lt;body&gt;</code> — для самого
            контента.
          </p>
        </>
      }
      task={
        <>
          <p>
            Теперь создайте базовый HTML-документ. Используйте стандартную
            структуру: добавьте декларацию типа документа, элементы{" "}
            <code>&lt;head&gt;</code> и <code>&lt;body&gt;</code>. Внутри{" "}
            <code>&lt;body&gt;</code> создайте заголовок <code>&lt;h1&gt;</code>{" "}
            и параграф <code>&lt;p&gt;</code>.
          </p>
        </>
      }
      test={test}
    />
  );
}
