export function getProps(str, propName) {
  // Создаем регулярное выражение для поиска propName
  const regex = new RegExp(`${propName}={([^}]+)}`);

  // Выполняем поиск с помощью регулярного выражения
  const match = str.match(regex);

  // Если значение найдено, возвращаем его, иначе null
  return match ? match[1] : null;
}
