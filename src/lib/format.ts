// Цены и время на внутренних страницах. null — значение ещё не пришло от заказчика
// (docs/TZ.md, «Открытые вопросы»): вместо цифры честная подпись, вёрстка та же.
export type Price = number | null;

export const formatPrice = (price: Price, empty = 'Уточняется') =>
  price === null ? empty : `${price.toLocaleString('ru-RU')} ₽`;

/** Время в расписании: null — «уточняйте у администратора». */
export const formatTime = (time: string | null) => time ?? 'уточняйте у администратора';

/** «от 350 ₽» по самой низкой известной цене; цен нет — пустая подпись. */
export const formatFrom = (prices: Price[], empty = 'Цена по запросу') => {
  const known = prices.filter((p): p is number => p !== null);
  return known.length ? `от ${formatPrice(Math.min(...known))}` : empty;
};
