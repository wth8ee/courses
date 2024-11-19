import { LessonLayout } from "../../../components/LessonLayout";
import { CodeExample } from "../../../components/CodeExample";
import { getElements } from "../../../model/getElements";

export function Lesson5({ program, lessonId, progress }) {
  const value = `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Списки</title>
</head>
<body>
    <h1>Пример списка</h1>
    
    <h2>Маркированный список</h2>
    <ul>
        <li>Пункт 1</li>
        <li>Пункт 2</li>
        <li>Пункт 3</li>
    </ul>

    <h2>Нумерованный список</h2>
    <ol>
        <li>Первый пункт</li>
        <li>Второй пункт</li>
        <li>Третий пункт</li>
    </ol>

    <h2>Список с вложенными элементами</h2>
    <ul>
        <li>Основной пункт
            <ul>
                <li>Вложенный пункт 1</li>
                <li>Вложенный пункт 2</li>
            </ul>
        </li>
        <li>Основной пункт 2</li>
    </ul>
</body>
</html>`;

  const test = () => {
    const children = getElements();
    console.log(children[0].children);
    return (
      children[0]?.tagName === "UL" &&
      children[1]?.tagName === "OL" &&
      children[0]?.children?.length == 3 &&
      children[1]?.children?.length == 3 &&
      Array.from(children[0]?.children)?.every(
        child => child.tagName === "LI"
      ) &&
      Array.from(children[1]?.children)?.every(child => child.tagName === "LI")
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
            В HTML списки играют важную роль в организации информации. Они
            используются для представления набора элементов в структурированной
            форме. Списки могут быть маркированными, нумерованными или с
            вложенными элементами.
          </p>

          <p className="mb-5 text-adpt">
            **Маркированный список** (<code>&lt;ul&gt;</code>) — это список, в
            котором каждый пункт отображается с маркером (точкой, кружочком и т.
            д.). Каждый элемент списка располагается внутри тега{" "}
            <code>&lt;li&gt;</code>.
          </p>

          <p className="mb-5 text-adpt">
            **Нумерованный список** (<code>&lt;ol&gt;</code>) — используется,
            когда порядок элементов имеет значение. Список нумеруется
            автоматически.
          </p>

          <p className="mb-5 text-adpt">
            **Вложенные списки** — это списки, которые можно встраивать в другие
            списки, создавая многоуровневую структуру. Вложенный список может
            быть как маркированным, так и нумерованным.
          </p>

          <p className="mb-5 text-adpt">
            Пример использования различных типов списков:
          </p>

          <CodeExample code={value} className="mb-5" />

          <div>
            <p className="mb-2">В этом примере:</p>
            <ul className="list-disc ml-5 mb-5">
              <li>
                Тег <code>&lt;ul&gt;</code> создаёт маркированный список.
              </li>
              <li>
                Тег <code>&lt;ol&gt;</code> создаёт нумерованный список.
              </li>
              <li>
                Тег <code>&lt;li&gt;</code> используется для каждого элемента в
                списке.
              </li>
              <li>
                Вложенные списки могут быть использованы для представления
                подкатегорий или дополнительных пунктов.
              </li>
            </ul>
            <p className="mb-5 text-adpt">
              Списки часто используются для представления элементов в навигации,
              для перечислений и других случаев, когда нужно показать несколько
              элементов в одном блоке.
            </p>
          </div>

          <p className="mb-5 text-adpt">
            Списки могут быть не только маркированными и нумерованными, но и
            комбинированными. Важно помнить, что правильное использование
            списков помогает улучшить структуру страницы и делает информацию
            более понятной для пользователей.
          </p>
        </>
      }
      task={
        <>
          <p className="mb-2">
            Создайте страницу, на которой будет два типа списков:
          </p>
          <ul className="list-disc ml-5 mb-5">
            <li>Маркированный список из 3 пунктов.</li>
            <li>Нумерованный список из 3 пунктов.</li>
          </ul>
        </>
      }
      test={test}
    />
  );
}
