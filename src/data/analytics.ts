// Яндекс Метрика. Грузится только после согласия в плашке cookie (src/components/CookieConsent.astro)
// и только в собранном сайте, в dev — нет.
// Счётчик со старого сайта vavilon70.ru на Tilda (13.11.2026), статистика продолжается в нём же.
export const metrikaId = '93027418';

// Метрика грузится только на этих доменах: тестовые заходы на GitHub Pages не попадают в статистику заказчика.
export const metrikaHosts = ['vavilon70.ru', 'www.vavilon70.ru'];

// Настройки счётчика как в коде из интерфейса Метрики. Вебвизор не видит, что вводят в поля заявки:
// у форм класс ym-hide-content (RequestForm.astro).
export const metrikaOptions = {
  ssr: true,
  webvisor: true,
  clickmap: true,
  accurateTrackBounce: true,
  trackLinks: true,
};

// Версия текста плашки и политики. Подняли — сохранённый выбор сбрасывается, и плашка спрашивает заново.
export const consentVersion = 1;
