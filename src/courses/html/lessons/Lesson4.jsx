import { LessonLayout } from "../../../components/LessonLayout";
import { CodeExample } from "../../../components/CodeExample";
import { getElements } from "../../../model/getElements";

export function Lesson4({ program, lessonId, progress }) {
  const value = `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Заголовки и абзацы</title>
</head>
<body>
    <h1>Заголовок первого уровня</h1>
    <h2>Заголовок второго уровня</h2>
    <p>Это абзац текста, который сопровождает заголовки. Теги h1 и h2 служат для выделения важности информации на странице, а p — для создания логических блоков текста.</p>
    <p>Каждый абзац текста имеет свои особенности в отображении: абзацы выделяются отступами, что улучшает восприятие контента. Это особенно важно для структуры и читаемости страницы.</p>
</body>
</html>`;

  const test = () => {
    const children = getElements();
    return (
      children[0]?.tagName === "H1" &&
      children[1]?.tagName === "H2" &&
      children[2]?.tagName === "P" &&
      children[3]?.tagName === "P" &&
      children[0]?.textContent === "Курсы" &&
      children[1]?.textContent === "Курсы по вёрстке" &&
      children[2]?.textContent === "Курс HTML" &&
      children[3]?.textContent === "Курс CSS"
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
            Заголовки и абзацы играют ключевую роль в организации текста на
            веб-странице. Использование заголовков помогает разделить контент на
            логические части, а абзацы обеспечивают структуру для текста.
          </p>

          <p className="mb-5 text-adpt">
            **Заголовки** (теги <code>&lt;h1&gt;</code> до{" "}
            <code>&lt;h6&gt;</code>) используются для выделения основных
            разделов контента. Тег <code>&lt;h1&gt;</code> представляет собой
            самый важный заголовок на странице и, как правило, используется
            только один раз. Заголовки от <code>&lt;h2&gt;</code> до{" "}
            <code>&lt;h6&gt;</code> используются для подпунктов и дополнительных
            разделов.
          </p>

          <p className="mb-5 text-adpt">
            **Абзацы** (<code>&lt;p&gt;</code>) служат для организации текста.
            Каждый абзац является отдельной логической единицей и визуально
            отделяется от других абзацев с помощью отступов. Важно помнить, что
            каждый абзац должен быть заключён в тег <code>&lt;p&gt;</code>.
          </p>

          <p className="mb-5 text-adpt">
            Заголовки и абзацы вместе создают структуру контента на странице.
            Например, каждый раздел на странице может начинаться с заголовка
            определённого уровня, а далее идут абзацы, которые содержат
            подробное описание темы.
          </p>

          <p className="mb-5 text-adpt">
            Важно также помнить, что теги заголовков играют важную роль в SEO
            (поисковой оптимизации). Поисковые системы обращают внимание на
            заголовки, чтобы понять структуру страницы и её содержание.
          </p>

          <p className="mb-5 text-adpt">
            В следующем примере показано, как используются заголовки и абзацы в
            HTML-документе:
          </p>

          <CodeExample code={value} className="mb-5" />

          <div>
            <p className="mb-2">В этом примере:</p>
            <ul className="list-disc ml-5 mb-5">
              <li>
                Тег <code>&lt;h1&gt;</code> — заголовок первого уровня, который
                используется для обозначения основного заголовка на странице.
              </li>
              <li>
                Тег <code>&lt;h2&gt;</code> — заголовок второго уровня, который
                обычно используется для обозначения подзаголовков или разделов
                внутри основного контента.
              </li>
              <li>
                Тег <code>&lt;p&gt;</code> — абзац текста, который используется
                для разделения контента на логические части.
              </li>
            </ul>
            <p className="mb-5 text-adpt">
              Структурируя контент с помощью заголовков и абзацев, вы делаете
              страницу более удобной для восприятия и улучшаете её
              SEO-оптимизацию.
            </p>
          </div>

          <p className="mb-5 text-adpt">
            Для того чтобы создать читаемую и понятную веб-страницу, всегда
            используйте заголовки и абзацы правильно. Не забывайте про важность
            семантики и структуры.
          </p>
        </>
      }
      task={
        <p>
          Создайте заголовки первого и второго уровней с текстом "Курсы" и
          "Курсы по вёрстке", а также 2 абзаца с текстом "Курс HTML" и "Курс
          CSS"
        </p>
      }
      test={test}
    />
  );
}
