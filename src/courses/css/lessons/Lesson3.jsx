import { CodeExample } from "../../../components/CodeExample";
import { CssResult } from "../../../components/CssResult";
import { LessonLayout } from "/src/components/LessonLayout";

export function Lesson3({ program, lessonId, progress }) {
  const test = () => {
    return;
  };

  return (
    <LessonLayout
      test={test}
      program={program}
      lessonId={lessonId}
      progress={progress}
      task={<></>}
      left={
        <>
          <>
            <p className="mb-2">
              Создайте &ls;div&gt; с произвольным текстом и классом georgia.
            </p>
            <p>В классе georgia задайте...</p>
          </>

          <h3>1. Изменение цвета текста</h3>
          <p>
            Для изменения цвета текста используем свойство <code>color</code>.
            Цвет можно задать с помощью именованных цветов, шестнадцатеричных
            значений или RGB:
          </p>

          <div>
            <p className="mb-2">HTML:</p>
            <CodeExample code={`<p class="red">Red text</p>`} />
          </div>

          <div>
            <p className="mb-2">CSS:</p>
            <CodeExample
              cs
              code={`.red {
    color: red;
}`}
            />
          </div>

          <div>
            <p className="mb-2">Вывод:</p>
            <CssResult
              html={`<p class="red">Red text</p>`}
              css={`
                .red {
                  color: red;
                }
              `}
            />
          </div>

          <h3>2. Изменение шрифта</h3>
          <p>
            Для изменения шрифта текста используется свойство{" "}
            <code>font-family</code>. Вы можете указать как системные шрифты,
            так и внешние (например, через Google Fonts):
          </p>

          <div>
            <p className="mb-2">HTML:</p>
            <CodeExample code={`<p class="arial">Font Arial</p>`} />
          </div>

          <div>
            <p className="mb-2">CSS:</p>
            <CodeExample
              cs
              code={`h1 {
    font-family: 'Arial', sans-serif;
}`}
            />
          </div>

          <div>
            <p className="mb-2">Вывод:</p>
            <CssResult
              html={`<p class="arial">Font Arial</p>`}
              css={`
                h1 {
                  font-family: "Arial", sans-serif;
                }
              `}
            />
          </div>

          <h3>3. Изменение размера шрифта</h3>
          <p>
            С помощью свойства font-size задаём размер шрифта. Размер можно
            указать в пикселях (px), процентах (%), em, rem и т.д.:
          </p>

          <div>
            <p className="mb-2">HTML:</p>
            <CodeExample code={`<p>24px text</p>`} />
          </div>

          <div>
            <p className="mb-2">CSS:</p>
            <CodeExample
              cs
              code={`h2 {
    font-size: 24px;
}`}
            />
          </div>

          <div>
            <p className="mb-2">Вывод:</p>
            <CssResult
              html={`<p>24px text</p>`}
              css={`
                h2 {
                  font-size: 24px;
                }
              `}
            />
          </div>

          <h3>4. Применение нескольких свойств</h3>
          <p>
            Вы можете комбинировать свойства для стилизации текста в одном
            блоке:
          </p>

          <div>
            <p className="mb-2">HTML:</p>
            <CodeExample code={`<p class="smth">18px pink Courier</p>`} />
          </div>

          <div>
            <p className="mb-2">CSS:</p>
            <CodeExample
              cs
              code={`.smth {
    color: pink;
    font-family: 'Courier New', Courier, monospace;
    font-size: 18px;
}`}
            />
          </div>

          <div>
            <p className="mb-2">Вывод:</p>
            <CssResult
              html={`<p class="smth">18px pink Courier</p>`}
              css={`
                .smth {
                  color: pink;
                  font-family: "Courier New", Courier, monospace;
                  font-size: 18px;
                }
              `}
            />
          </div>
        </>
      }
    />
  );
}
