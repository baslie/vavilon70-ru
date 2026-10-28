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
