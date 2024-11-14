import { LessonLayout } from "../../../components/LessonLayout";
import { CodeExample } from "../../../components/CodeExample";
import { getElements } from "../../../model/getElements";

export function Lesson2({ program, lessonId }) {
  const value = `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Пример HTML страницы</title>
</head>
<body>
    <h1>Пример заголовка</h1>
    <p>Это простой абзац текста.</p>
    <a href="https://example.com">Ссылка на внешний сайт</a>
    <img src="image.jpg" alt="Пример изображения">
</body>
</html>`;

  const value2 = `<h1>Тег h1</h1>
<p>Тег p</p>
<a href="https://example.com">Тег a с ссылкой</a>
<img src="image.jpg" alt="Изображение">`;

  const test = () => {
    const children = getElements();
    return (
      children[0]?.tagName === "H1" &&
      children[1]?.tagName === "P" &&
      children[2]?.tagName === "A" &&
      children[3]?.tagName === "IMG"
    );
  };

  return (
    <LessonLayout
      lessonId={lessonId}
      program={program}
      left={
        <>
          <p className="mb-5 text-adpt">
            В HTML каждый элемент описан с помощью тега. Каждый тег состоит из
            **открывающей** и **закрывающей** части (для парных тегов), а также
            может содержать **атрибуты**. Рассмотрим основные моменты:
          </p>

          <p className="mb-5 text-adpt">
            **Парные теги** — это теги, которые всегда идут парами: сначала
            открывающий тег, затем закрывающий. Например, у тега{" "}
            <code>&lt;h1&gt;</code> есть открывающая и закрывающая часть:{" "}
            <code>&lt;h1&gt;</code> и <code>&lt;/h1&gt;</code>. Закрывающий тег
            всегда такой же, как и открывающий, но с косой чертой перед
            названием.
          </p>

          <p className="mb-5 text-adpt">
            **Непарные теги** — это теги, у которых нет закрывающей части, они
            самозакрывающиеся. Например, тег <code>&lt;img&gt;</code>{" "}
            используется для вставки изображения. Он не имеет закрывающего тега
            и выглядит так:{" "}
            <code>&lt;img src="image.jpg" alt="Описание" /&gt;</code>.
          </p>

          <p className="mb-5 text-adpt">
            Рассмотрим следующий пример, где есть как парные, так и непарные
            теги:
          </p>
          <CodeExample code={value} className="mb-5" />

          <div>
            <p className="mb-2">В этом примере:</p>
            <ul className="list-disc ml-5 mb-5">
              <li>
                Тег <code>&lt;h1&gt;</code> — парный тег, используется для
                заголовка первого уровня.
              </li>
              <li>
                Тег <code>&lt;p&gt;</code> — парный тег, используется для
                создания абзаца текста.
              </li>
              <li>
                Тег <code>&lt;a&gt;</code> — парный тег, создаёт ссылку. Атрибут{" "}
                <code>href</code> указывает адрес.
              </li>
              <li>
                Тег <code>&lt;img&gt;</code> — непарный тег, используется для
                вставки изображения. Атрибуты <code>src</code> и{" "}
                <code>alt</code> необходимы для указания пути к изображению и
                альтернативного текста.
              </li>
              <li>
                Тег <code>&lt;head&gt;</code> — парный тег, содержит
                метаинформацию страницы.
              </li>
              <li>
                Тег <code>&lt;body&gt;</code> — парный тег, содержит видимый
                контент страницы.
              </li>
            </ul>
            <p className="mb-5 text-adpt">
              Важно помнить, что **не все теги требуют закрывающих тегов**.
              Например, тег <code>&lt;img&gt;</code> или <code>&lt;br&gt;</code>{" "}
              не имеют закрывающей части и называются **самозакрывающимися**.
            </p>
          </div>

          <p className="mb-5 text-adpt">
            Структура HTML-документа важна для правильного отображения страницы.
            Следует всегда помнить, какие теги парные, а какие непарные, чтобы
            избежать ошибок в разметке.
          </p>

          <p className="mb-5 text-adpt">
            В HTML теги не чувствительны к регистру, но по общепринятому
            стандарту принято писать их в нижнем регистре. Пример:{" "}
            <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>,{" "}
            <code>&lt;img&gt;</code>.
          </p>
        </>
      }
      task={
        <>
          <p className="mb-2">
            Теперь, используя знания о парных и непарных тегах, создайте
            страницу с различными элементами. Используйте как парные, так и
            непарные теги. Создайте заголовок, абзац, ссылку и вставьте
            изображение.
          </p>
          <CodeExample code={value2} />
        </>
      }
      test={test}
    />
  );
}
