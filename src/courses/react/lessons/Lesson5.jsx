import React, { useState } from "react";
import { CodeExample } from "../../../components/CodeExample";
import { LessonLayout } from "../../../components/LessonLayout";
import { extractComponent } from "../../../model/extractComponent";
import { getCalls } from "../../../model/getCalls";
import { toComponent } from "../../../model/toComponent";
import { toJs } from "../../../model/toJs";
import { getProps } from "../../../model/getProps";
import { createRoot } from "react-dom/client";
import { delay } from "../../../model/delay";

export function Lesson5({ program, lessonId, progress }) {
  const [root, setRoot] = useState(null);

  const test = async code => {
    const compiler = document.getElementById("compiler");
    if (root) {
      root.unmount();
      setRoot(null);
    }
    try {
      const buildingString = extractComponent(code, "Building");
      const floorString = extractComponent(code, "Floor");

      if (!buildingString || !floorString) {
        return false;
      }

      const jsBuildingString = toJs(buildingString);
      const jsFloorString = toJs(floorString);

      const Building = toComponent(jsBuildingString);
      const Floor = toComponent(jsFloorString);

      const floorCalls = getCalls(code, "Floor");
      if (floorCalls?.length < 2) {
        return false;
      }
      const rooms = [];
      for (let floorCall of floorCalls) {
        rooms.push(getProps(floorCall, "rooms"));
      }

      if (rooms?.length < 2) {
        return false;
      }

      const floors = [];
      for (let floorCall of floorCalls) {
        floors.push(getProps(floorCall, "floor"));
      }

      if (floors?.length < 2) {
        return false;
      }

      if (typeof Building == typeof Floor && typeof Floor == "function") {
        const newRoot = createRoot(compiler);
        setRoot(newRoot);
        newRoot.render(<Building Floor={Floor} React={React} />);
      }

      console.log(rooms, floors);

      await delay(10);

      const element = document.getElementById("compiler").children;
      const elements = element?.[0]?.children;
      const first =
        elements?.[0].textContent ==
        `${floors[0]} floor has ${rooms[0]} rooms.`;
      const second =
        elements?.[1].textContent ==
        `${floors[1]} floor has ${rooms[1]} rooms.`;

      return first && second;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <LessonLayout
      test={test}
      redux
      lessonId={lessonId}
      program={program}
      progress={progress}
      left={
        <>
          <p>
            В React компоненты могут взаимодействовать между собой, передавая
            данные через пропсы (props). Это один из основных способов, с
            помощью которых компоненты могут обмениваться информацией, и он
            играет ключевую роль в построении реактивных интерфейсов. В этом
            уроке мы будем обсуждать, что такое пропсы, как их передавать и как
            использовать в компонентах.
          </p>
          <p className="text-adptmd hl">Что такое пропсы?</p>
          <p>
            Пропсы — это объект, который позволяет родительскому компоненту
            передавать данные в дочерний компонент. Пропсы являются важной
            частью однонаправленного потока данных в React: родительский
            компонент передает данные через пропсы в дочерний компонент, а тот,
            в свою очередь, может использовать эти данные для рендеринга.
          </p>
          <p>
            Пропсы могут быть любыми JavaScript-типами: строки, числа, массивы,
            объекты или функции. Дочерний компонент получает пропсы как
            параметры, которые можно использовать для отображения или обработки
            данных.
          </p>
          <p className="text-adptmd hl">Как передавать пропсы?</p>
          <p>
            Чтобы передать пропсы, нужно указать их в качестве атрибутов при
            использовании дочернего компонента:
          </p>
          <CodeExample code={`<ChildComponent name="Alice" age={30} />`} jsx />
          <p>
            В этом примере компоненту <code>ChildComponent</code> передаются два
            пропса: <code>name</code> и <code>age</code>, которые содержат
            значения <code>"Alice"</code> и <code>30</code> соответственно.
          </p>
          <p className="text-adptmd hl">
            Получение пропсов в дочернем компоненте
          </p>
          <p>
            В дочернем компоненте пропсы можно получить как аргумент функции.
            Компонент будет использовать объект <code>props</code> для доступа к
            переданным данным:
          </p>
          <CodeExample
            jsx
            code={`function ChildComponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>Age: {props.age}</p>
    </div>
  );
}`}
          />
          <p>
            Здесь компонент <code>ChildComponent</code> использует{" "}
            <code>props.name</code> и <code>props.age</code> для вывода значений
            пропсов, переданных из родительского компонента.
          </p>
          <p className="text-adptmd hl">
            Пример 1: Передача данных через пропсы
          </p>
          <p>
            Посмотрим на пример, где родительский компонент передает данные в
            дочерний:
          </p>
          <CodeExample
            jsx
            code={`// Родительский компонент
function ParentComponent() {
  const name = "Alice";
  const age = 30;

  return <ChildComponent name={name} age={age} />;
}

// Дочерний компонент
function ChildComponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>Age: {props.age}</p>
    </div>
  );
}`}
          />
          <p className="text-adptmd hl">Объяснение:</p>
          <ol className="list-ol flex flex-col gap-4">
            <li>
              В родительском компоненте <code>ParentComponent</code> создаются
              переменные <code>name</code> и <code>age</code>, которые содержат
              данные.
            </li>
            <li>
              Эти данные передаются дочернему компоненту{" "}
              <code>ChildComponent</code> через пропсы.
            </li>
            <li>
              В дочернем компоненте <code>ChildComponent</code> пропсы
              получаются через объект props, и используются для рендеринга имени
              и возраста.
            </li>
          </ol>
          <p className="text-adptmd hl">Как можно передавать сложные данные?</p>
          <p>
            Пропсы могут содержать не только простые типы данных, но и сложные
            структуры, такие как объекты и массивы:
          </p>
          <CodeExample
            jsx
            code={`// Родительский компонент
function ParentComponent() {
  const user = {
    name: "Bob",
    age: 40,
    hobbies: ["Reading", "Cycling", "Photography"]
  };

  return <ChildComponent user={user} />;
}

// Дочерний компонент
function ChildComponent(props) {
  return (
    <div>
      <h1>{props.user.name}</h1>
      <p>Age: {props.user.age}</p>
      <h3>Hobbies:</h3>
      <ul>
        {props.user.hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}`}
          />
          <p className="text-adptmd hl">Объяснение:</p>
          <ol className="list-ol flex flex-col gap-4">
            <li>
              В родительском компоненте создается объект <code>user</code>,
              который содержит имя, возраст и массив хобби.
            </li>
            <li>
              Этот объект передается в дочерний компонент через пропс{" "}
              <code>user</code>.
            </li>
            <li>
              В дочернем компоненте мы используем <code>props.user</code> для
              доступа к данным и отображения их.
            </li>
          </ol>
          <h3>Деструктуризация пропсов</h3>
          <p>
            Часто в React используется деструктуризация пропсов, чтобы упростить
            доступ к данным. Вместо того чтобы обращаться к{" "}
            <code>props.name</code>, можно сразу деструктурировать пропсы в
            параметрах функции компонента:
          </p>
          <h3>Деструктуризация в параметре функции компонента</h3>
          <CodeExample
            jsx
            code={`// Дочерний компонент с деструктуризацией пропсов
function ChildComponent({ name, age }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Age: {age}</p>
    </div>
  );
}`}
          />
          <h3>Объяснение:</h3>
          <p>
            Мы сразу деструктурируем пропсы в параметре функции, указав{" "}
            <code>&#123;&#40;name, age&#41;&#125;</code>. Это позволяет нам
            напрямую использовать name и age внутри компонента, без
            необходимости обращаться к props.name или props.age.
          </p>
          <h3>Деструктуризация в теле компонента</h3>
          <p>Можно также выполнить деструктуризацию внутри тела компонента:</p>
          <CodeExample
            jsx
            code={`// Дочерний компонент с деструктуризацией внутри тела функции
function ChildComponent(props) {
  const { name, age } = props;

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Age: {age}</p>
    </div>
  );
}`}
          />
          <h3>Объяснение:</h3>
          <p>
            Мы получаем все пропсы через объект <code>props</code>, а затем
            деструктурируем нужные поля, такие как <code>name</code> и{" "}
            <code>age</code>, внутри тела компонента.
          </p>
          <h3>Пример 2: Деструктуризация пропсов</h3>
          <p>
            Рассмотрим пример с деструктуризацией пропсов в дочернем компоненте:
          </p>
          <CodeExample
            jsx
            code={`// Родительский компонент
function ParentComponent() {
  const user = {
    name: "Charlie",
    age: 25
  };

  return <ChildComponent name={user.name} age={user.age} />;
}

// Дочерний компонент с деструктуризацией пропсов
function ChildComponent({ name, age }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Age: {age}</p>
    </div>
  );
}`}
          />
          <p className="text-adptmd hl">Объяснение:</p>
          <ol className="list-ol flex flex-col gap-4">
            <li>
              В родительском компоненте мы передаем пропсы <code>name</code> и{" "}
              <code>age</code> в дочерний компонент.
            </li>
            <li>
              В дочернем компоненте мы сразу деструктурируем эти пропсы в
              параметре функции, чтобы использовать их без дополнительного
              обращения к <code>props</code>.
            </li>
          </ol>
          <h3>Заключение</h3>
          <p>
            Передача данных через пропсы — это один из самых основных механизмов
            взаимодействия компонентов в React. Мы рассмотрели, как передавать
            данные через пропсы, как использовать их в дочернем компоненте, а
            также как упростить работу с ними с помощью деструктуризации. Это
            помогает сделать код более читаемым и удобным для разработки.
          </p>
        </>
      }
      task={
        <>
          Создайте компоненты Building и Floor. Компонент Floor должен принимать
          в качестве пропсов floor и rooms и возвращать текст "n floor has m
          rooms.", где n это floor, а m - rooms. Компонент Building должен
          принимать пропс Floor и возвращать div, содержащий два компонента
          Floor с переданными пропсами.
        </>
      }
    />
  );
}
