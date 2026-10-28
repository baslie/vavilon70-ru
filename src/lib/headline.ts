import { headlineKeys } from '../data/headlines';

// Заголовок .headline из данных: самое длинное слово должно влезать в свою колонку.
// Unbounded 800 капсом с наклоном занимает около 0,95em на букву, а русских переносов
// в браузерах может не быть, поэтому кегль ограничиваем сверху: класс .headline-fit
// в global.css делит ширину колонки (--span из 12 от lg, вся ширина ниже) на длину слова.
// Короткий предлог типограф склеивает со следующим словом неразрывным пробелом — считаем вместе.
export const fitHeadline = (text: string, size: string, span = 12) => {
  const words = text.split(/\s+/);
  const longest = Math.max(...words.map((w, i) => (w.length <= 2 && words[i + 1] ? w.length + 1 + words[i + 1].length : w.length)));
  return `--size: ${size}; --n: ${(longest * 0.95).toFixed(2)}; --span: ${span}`;
};

// Длинный заголовок делится на ключ и контекст по словарю src/data/headlines.ts.
// null — ключа нет или текст в данных поменялся: заголовок целиком плакатом.
export const splitHeadline = (text: string) => {
  const key = headlineKeys[text];
  const at = key ? text.indexOf(key) : -1;
  if (at < 0) return null;
  return { before: text.slice(0, at).trim(), key, after: text.slice(at + key.length).trim() };
};
