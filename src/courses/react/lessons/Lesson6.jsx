import { CodeExample } from "../../../components/CodeExample";
import { LessonLayout } from "../../../components/LessonLayout";

export function Lesson6({ program, lessonId, progress }) {
  const test = [
    {
      question: "Что такое PropTypes в React?",
      options: [
        "Способ для работы с состоянием компонента",
        "Инструмент для проверки типов пропсов",
        "Метод для рендеринга компонента",
        "Библиотека для управления маршрутизацией",
      ],
      answer: 1,
    },
    {
      question: "Какой тип данных должен быть у пропса, если ожидается строка?",
      options: [
        "PropTypes.number",
        "PropTypes.string",
        "PropTypes.bool",
        "PropTypes.object",
      ],
      answer: 1,
    },
    {
      question:
        "Что произойдет, если не передать обязательный пропс в компонент?",
      options: [
        "React выведет ошибку в консоли",
        "Пропс будет заменен на значение по умолчанию",
        "Компонент не отрендерится",
        "Пропс станет равным null",
      ],
      answer: 0,
    },
    {
      question:
        "Как указать, что пропс является обязательным и должен быть числом?",
      options: [
        "PropTypes.number.isRequired",
        "PropTypes.string.isRequired",
        "PropTypes.bool.isRequired",
        "PropTypes.number",
      ],
      answer: 0,
    },
    {
      question: "Что делает PropTypes.arrayOf()?",
      options: [
        "Проверяет, что пропс является массивом",
        "Проверяет, что все элементы массива имеют указанный тип",
        "Проверяет, что пропс является объектом",
        "Проверяет, что все элементы объекта имеют указанный тип",
      ],
      answer: 1,
    },
    {
      question:
        "Как проверить, что пропс является объектом с определенной структурой?",
      options: [
        "PropTypes.shape()",
        "PropTypes.arrayOf()",
        "PropTypes.objectOf()",
        "PropTypes.instanceOf()",
      ],
      answer: 0,
    },
    {
      question:
        "Что произойдет, если в компонент передан неправильный тип пропса?",
      options: [
        "React выведет предупреждение в консоли",
        "Компонент не отрендерится",
        "Пропс будет проигнорирован",
        "Пропс заменится на null",
      ],
      answer: 0,
    },
    {
      question: "Что такое `defaultProps` в React?",
      options: [
        "Функция для вычисления значений пропсов",
        "Объект, содержащий дефолтные значения для пропсов",
        "Метод для проверки типов пропсов",
        "Список обязательных пропсов",
      ],
      answer: 1,
    },
    {
      question:
        "Как проверить, что пропс является массивом объектов с определенной структурой?",
      options: [
        "PropTypes.arrayOf(PropTypes.shape())",
        "PropTypes.array(PropTypes.shape())",
        "PropTypes.objectOf(PropTypes.shape())",
        "PropTypes.shape(PropTypes.array())",
      ],
      answer: 0,
    },
  ];

  return (
    <LessonLayout
      test={test}
      redux
      lessonId={lessonId}
      program={program}
      progress={progress}
      task={
        <>
          <p>Пройдите тест по содержанию урока.</p>
        </>
      }
      left={
        <>
          <p>
            В этом уроке мы углубимся в важную тему — типы пропсов и их
            валидация. Валидация пропсов помогает нам убедиться, что компоненты
            получают правильные данные, что снижает вероятность ошибок в
            приложении и повышает надежность кода.
          </p>
          <h3>1. Типы пропсов в React</h3>
          <p>
            React использует библиотеку prop-types, чтобы проверять типы данных,
            передаваемых через пропсы в компоненты. Мы можем указать, какой тип
            данных ожидаем для каждого пропса и пометить пропсы как обязательные
            или опциональные. Пример: базовая валидация пропсов
          </p>
          <CodeExample
            jsx
            code={`import PropTypes from 'prop-types';

function UserProfile({ name, age }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
    </div>
  );
}

// Валидация типов пропсов
UserProfile.propTypes = {
  name: PropTypes.string.isRequired,  // name должен быть строкой и является обязательным
  age: PropTypes.number.isRequired,   // age должен быть числом и является обязательным
};`}
          />
          <p>В этом примере:</p>
          <ul>
            <li>
              PropTypes.string.isRequired — проверяет, что пропс name должен
              быть строкой, и он обязателен.
            </li>
            <li>
              PropTypes.number.isRequired — проверяет, что пропс age должен быть
              числом, и он обязателен.
            </li>
          </ul>
          <p>
            Если один из этих пропсов будет отсутствовать или передан в
            неправильном формате, React выведет предупреждение в консоли.
          </p>
          <h3>2. Типы данных для пропсов</h3>
          <p>
            React поддерживает разнообразные типы данных для пропсов. Рассмотрим
            наиболее часто используемые из них.
          </p>
          <h3>2.1. Примитивные типы</h3>
          <ul>
            <li>PropTypes.string: Ожидает строку.</li>
            <li>PropTypes.number: Ожидает число.</li>
            <li>PropTypes.bool: Ожидает булевое значение (true или false)</li>
            <li>PropTypes.func: Ожидает функцию.</li>
            <li>
              PropTypes.node: Ожидает любой элемент, который может быть
              отрендерен в React (строка, число, элемент JSX и т. д.).
            </li>
            <li>
              PropTypes.element: Ожидает конкретный React-элемент (например,
              JSX-компонент).
            </li>
          </ul>
          <p>Пример:</p>
          <CodeExample
            jsx
            code={`import PropTypes from 'prop-types';

function Button({ text, onClick, disabled }) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,     // text должен быть строкой
  onClick: PropTypes.func.isRequired,    // onClick должен быть функцией
  disabled: PropTypes.bool,              // disabled должен быть булевым значением
};`}
          />
          <h3>2.2. Массивы и объекты</h3>
          <ul>
            <li>PropTypes.array: Ожидает массив.</li>
            <li>PropTypes.object: Ожидает обычный объект.</li>
            <li>
              PropTypes.arrayOf(PropTypes.&lt;тип &gt;): Ожидает массив,
              элементы которого соответствуют указанному типу.
            </li>
            <li>
              PropTypes.objectOf(PropTypes.&lt;тип&gt;): Ожидает объект,
              значения которого соответствуют указанному типу.
            </li>
            <li>
              PropTypes.shape(): Ожидает объект с определенной структурой
              (например, объект с определенными полями).
            </li>
          </ul>
          <p>Пример с массивом объектов:</p>
          <CodeExample
            jsx
            code={`import PropTypes from 'prop-types';

function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>{task.text}</li>
      ))}
    </ul>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,  // tasks должен быть массивом объектов с полями id и text
};`}
          />

          <p>
            Здесь используется PropTypes.arrayOf, чтобы указать, что каждый
            элемент массива должен быть объектом, соответствующим определенной
            структуре, заданной с помощью PropTypes.shape().
          </p>

          <h3>3. Использование isRequired</h3>
          <p>
            Каждый пропс может быть помечен как обязательный, используя
            isRequired. Если пропс, помеченный как обязательный, не будет
            передан, React выведет предупреждение.
          </p>

          <p>Пример:</p>
          <CodeExample
            jsx
            code={`import PropTypes from 'prop-types';

function Profile({ username, age }) {
  return (
    <div>
      <h1>{username}</h1>
      <p>Age: {age}</p>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,  // обязательный строковый пропс
  age: PropTypes.number.isRequired,      // обязательный числовой пропс
};`}
          />

          <h3>4. Валидация пропсов с умолчаниями</h3>
          <p>
            Мы можем задать дефолтные значения для пропсов, если они не были
            переданы. Это делается через defaultProps.
          </p>

          <p>Пример:</p>
          <CodeExample
            jsx
            code={`import PropTypes from 'prop-types';

function Greeting({ name, greeting }) {
  return <h1>{greeting}, {name}!</h1>;
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  greeting: PropTypes.string,
};

Greeting.defaultProps = {
  greeting: 'Hello',  // Если greeting не передан, будет использоваться 'Hello'
};`}
          />
          <p>
            Если greeting не будет передан, по умолчанию будет использовано
            значение 'Hello'.
          </p>

          <h3>5. Валидация сложных пропсов</h3>
          <p>
            Для проверки объектов с более сложной структурой используется
            PropTypes.shape(). Этот метод позволяет описать структуру объекта и
            гарантировать, что все вложенные поля имеют нужные типы.
          </p>

          <p>Пример:</p>
          <CodeExample
            jsx
            code={`import PropTypes from 'prop-types';

function AddressCard({ address }) {
  return (
    <div>
      <p>{address.street}, {address.city}, {address.zip}</p>
    </div>
  );
}

AddressCard.propTypes = {
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zip: PropTypes.number.isRequired,
  }).isRequired,  // Пропс address должен быть объектом с полями street, city, zip
};`}
          />
          <p>
            Здесь мы проверяем, что address является объектом с тремя
            обязательными строковыми полями: street, city и числовым полем zip.
          </p>

          <h3>Заключение</h3>
          <p>
            Типизация и валидация пропсов — важная часть разработки на React,
            особенно для крупных проектов. Это позволяет не только предотвращать
            ошибки в работе с данными, но и улучшать читаемость кода, а также
            облегчать поддержку и развитие приложения.
          </p>
          <p>
            В этом уроке мы рассмотрели основные типы пропсов, способы их
            валидации и использование библиотеки prop-types. Теперь вы можете
            уверенно работать с пропсами в React, контролируя типы данных и
            предотвращая потенциальные проблемы с неправильными значениями.
          </p>
        </>
      }
    />
  );
}
