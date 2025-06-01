export const formatCardNumber = (value: string) =>
  value
    .replace(/\D/g, "") // Удаляем все нецифровые символы
    .replace(/(.{4})/g, "$1 ") // Вставляем пробел после каждых 4 цифр
    .trim(); // Удаляем лишние пробелы