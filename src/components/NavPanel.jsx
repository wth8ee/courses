export function NavPanel({ className }) {
  return (
    <nav className={className}>
      <ul className="flex gap-8 text-lg text-ct7 transition-colors">
        <li>
          <a className="hover:text-ct5 transition-colors" href="/">
            Главная
          </a>
        </li>
        <li>
          <a className="hover:text-ct5 transition-colors" href="/courses">
            Курсы
          </a>
        </li>
      </ul>
    </nav>
  );
}
