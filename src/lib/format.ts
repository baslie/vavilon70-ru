// Цены и время на внутренних страницах. null — значение ещё не пришло от заказчика
// (docs/TZ.md, «Открытые вопросы»): вместо цифры честная подпись, вёрстка та же.
export type Price = number | null;

export const formatPrice = (price: Price, empty = 'Уточняется') =>
  price === null ? empty : `${price.toLocaleString('ru-RU')} ₽`;

/** Время в расписании: null — «уточняйте у администратора». */
export const formatTime = (time: string | null) => time ?? 'уточняйте у администратора';
