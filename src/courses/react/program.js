export const reactProgram = [
  {
    name: "Введение в React",
    lessons: [
      "Что такое React и зачем он нужен?",
      "Установка и настройка окружения для разработки на React",
      "Основы JSX: синтаксис и правила",
      "Создание первого компонента",
      "Рендеринг компонентов в DOM",
      "Реактивные компоненты: как React обновляет UI",
      "Компоненты и их структура: классовые и функциональные компоненты",
    ],
  },
  {
    name: "Компоненты и пропсы",
    lessons: [
      "Что такое компоненты в React?",
      "Передача данных через пропсы",
      "Типы пропсов и их валидация",
      "Рисование компонентов с использованием пропсов",
      "Композиция компонентов: родительские и дочерние компоненты",
      "Дефолтные значения пропсов",
      "Обработка ошибок при передаче пропсов",
    ],
  },
  {
    name: "Состояние (State) и управление состоянием",
    lessons: [
      "Что такое состояние компонента (state)?",
      "Использование useState для работы с состоянием",
      "Обновление состояния и его влияния на рендеринг",
      "Работа с несколькими состояниями",
      "Состояние в классовых компонентах",
      "Управление состоянием на уровне компонента",
      "Передача состояния через пропсы",
    ],
  },
  {
    name: "Обработка событий",
    lessons: [
      "Как обрабатывать события в React",
      "Синтаксис обработки событий в JSX",
      "Передача параметров в обработчики событий",
      "Методы классовых компонентов для обработки событий",
      "Важность привязки контекста (this)",
      "События в функциональных компонентах с хуками",
    ],
  },
  {
    name: "Жизненный цикл компонентов",
    lessons: [
      "Что такое жизненный цикл компонента?",
      "Основные методы жизненного цикла в классовых компонентах (componentDidMount, componentDidUpdate, componentWillUnmount)",
      "Использование хука useEffect для работы с жизненным циклом в функциональных компонентах",
      "Чистые функции и их использование для оптимизации",
      "Как избежать повторных рендеров с использованием жизненного цикла",
      "Работа с асинхронными запросами в жизненном цикле компонента",
    ],
  },
  {
    name: "Хуки React",
    lessons: [
      "Что такое хуки в React?",
      "Хук useState: основа работы с состоянием",
      "Хук useEffect: работа с побочными эффектами",
      "Хук useContext: использование контекста в функциональных компонентах",
      "Хук useReducer: альтернатива useState для сложного состояния",
      "Хук useCallback: оптимизация функций и предотвращение лишних рендеров",
      "Хук useMemo: оптимизация вычислений и производительности",
      "Создание собственных хуков",
    ],
  },
  {
    name: "Роутинг в React",
    lessons: [
      "Что такое React Router и зачем он нужен?",
      "Установка и настройка React Router",
      "Основные компоненты React Router: BrowserRouter, Route, Link, NavLink",
      "Навигация между страницами с помощью React Router",
      "Передача параметров в URL с помощью маршрутов",
      "Программная навигация в React",
      "Защищённые маршруты и авторизация",
      "Реализация вложенных маршрутов",
    ],
  },
  {
    name: "Управление состоянием с использованием Context API",
    lessons: [
      "Что такое Context API и когда его использовать?",
      "Создание контекста с помощью React.createContext",
      "Передача значений через провайдер (Provider)",
      "Потребление данных из контекста с помощью Consumer",
      "Использование useContext для работы с контекстом в функциональных компонентах",
      "Отличия между локальным состоянием и состоянием через Context API",
      "Оптимизация производительности при использовании Context API",
    ],
  },
  {
    name: "Продвинутые техники работы с React",
    lessons: [
      "React.memo: оптимизация рендеринга компонентов",
      "React.lazy и Suspense: динамическая загрузка компонентов",
      "Error boundaries: обработка ошибок в React-компонентах",
      "Переход от классовых к функциональным компонентам",
      "Дебаггинг и отладка React-приложений",
      "React Profiler: инструменты для анализа производительности",
      "Оптимизация работы с большими списками (React Virtualized)",
    ],
  },
  {
    name: "Работа с API в React",
    lessons: [
      "Получение данных с сервера в React (fetch, axios)",
      "Работа с асинхронными запросами в компонентах",
      "Обработка ошибок при получении данных",
      "Динамическая загрузка данных в компоненты",
      "Управление состоянием загрузки, ошибок и данных",
      "Работа с JSON и API в реальном времени",
      "Использование useEffect для запросов к API",
    ],
  },
  {
    name: "Тестирование React-приложений",
    lessons: [
      "Введение в тестирование React-приложений",
      "Тестирование компонентов с использованием Jest и React Testing Library",
      "Мокирование данных и функций для тестов",
      "Написание юнит-тестов для компонентов и функций",
      "Тестирование асинхронных запросов в React",
      "Интеграционные тесты и тестирование взаимодействий между компонентами",
      "Тестирование хуков и контекста",
    ],
  },
  {
    name: "Производительность в React",
    lessons: [
      "Как улучшить производительность React-приложений?",
      "Оптимизация рендеринга с помощью React.memo и PureComponent",
      "Lazy loading компонентов для уменьшения размера начальной загрузки",
      "Использование виртуализации списков для оптимизации рендеринга",
      "Минимизация повторных рендеров с использованием хуков",
      "Отслеживание производительности с использованием React Profiler",
      "Мемоизация значений и функций с помощью useMemo и useCallback",
    ],
  },
  {
    name: "Продвинутые концепции и паттерны проектирования в React",
    lessons: [
      "Реактивное программирование в React: паттерны и подходы",
      "Композиция и разделение логики с использованием HOC (Higher Order Components)",
      "Реализация паттерна Render Props",
      "Использование паттерна Compound Components",
      "Работа с Observable/Redux в React-приложениях",
      "Архитектура приложения с использованием React и Redux",
      "Внедрение зависимостей в React с использованием hooks",
    ],
  },
  {
    name: "Интеграция с внешними библиотеками и фреймворками",
    lessons: [
      "Интеграция с UI-фреймворками: Material UI, Ant Design, Bootstrap",
      "Использование графиков и визуализаций с библиотеками типа D3.js, Chart.js",
      "Интеграция с картами с использованием библиотеки Leaflet или Google Maps",
      "Использование WebSocket для работы с реальным временем",
      "Интеграция с состоянием приложения через Redux или MobX",
      "Интеграция с серверными решениями: Firebase, Node.js",
    ],
  },
  {
    name: "Финальные шаги и развертывание приложения",
    lessons: [
      "Подготовка React-приложения к продакшн-сборке",
      "Оптимизация кода и уменьшение размера бандла",
      "Настройка и использование CI/CD для React-приложений",
      "Развертывание React-приложений на различных платформах (Netlify, Vercel, Heroku)",
      "Работа с Docker для контейнеризации React-приложений",
      "Лучшие практики для написания чистого и масштабируемого кода",
      "Документирование и поддержка React-приложений",
    ],
  },
];
