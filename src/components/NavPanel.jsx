export function NavPanel({ className }) {
  return (
    <nav className={className}>
      <ul className="flex gap-[max(2vw,14px)] text-lg text-ct7 transition-colors">
        <li>
          <a
            className="hover:text-ct5 text-[max(1vw,14px)] transition-colors"
            href="/"
          >
            Главная
          </a>
        </li>
        <li>
          <a
            className="hover:text-ct5 text-[max(1vw,14px)] transition-colors"
            href="/courses"
          >
            Курсы
          </a>
        </li>
        <li>
          <a
            className="hover:text-ct5 text-[max(1vw,14px)] transition-colors"
            href="/profile"
          >
            Прогресс
          </a>
        </li>
      </ul>
    </nav>
  );
}
