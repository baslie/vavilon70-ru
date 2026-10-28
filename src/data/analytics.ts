// Яндекс Метрика. Грузится только после согласия в плашке cookie (src/components/CookieConsent.astro)
// и только в собранном сайте, в dev — нет.
// ЗАГЛУШКА (#26): номер счётчика. Пока пусто, Метрика не грузится даже после согласия.
export const metrikaId = '';

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
