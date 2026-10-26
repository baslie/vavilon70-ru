// Меню сайта по ТЗ (docs/TZ.md, «Шапка и меню»). Адреса — будущие внутренние страницы:
// пока их нет, ссылки ведут в 404. Скрыты пункты из «Открытых вопросов»: Акции (#13),
// Зона PS5 (#11), Аниматоры и квесты и Новогодние программы (#14).

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Путь от корня сайта с учётом base из astro.config. */
export const url = (path: string) => `${base}${path}`;

export type NavLink = { title: string; href: string };
export type NavGroup = { title: string; links: NavLink[] };
export type NavItem = NavLink & { groups?: NavGroup[] };

export const menu: NavItem[] = [
  { title: 'О центре', href: url('/o-centre/') },
  {
    title: 'Услуги и цены',
    href: url('/uslugi/'),
    groups: [
      {
        title: 'Свободные посещения',
        links: [
          { title: 'Свободные прыжки', href: url('/uslugi/svobodnye-pryzhki/') },
          { title: 'Ниндзя-трасса', href: url('/uslugi/ninja-trassa/') },
          { title: 'Мини-футбол', href: url('/uslugi/mini-futbol/') },
        ],
      },
      {
        title: 'Тренировки и секции',
        links: [
          { title: 'Тренировки с инструктором', href: url('/trenirovki/personalnye/') },
          { title: 'Детские секции', href: url('/trenirovki/detskie-sekcii/') },
          { title: 'Взрослые секции', href: url('/trenirovki/vzroslye-sekcii/') },
        ],
      },
      {
        title: 'Дополнительно',
        links: [{ title: 'Подарочные сертификаты', href: url('/uslugi/sertifikaty/') }],
      },
    ],
  },
  {
    title: 'Праздники',
    href: url('/prazdniki/'),
    groups: [
      {
        title: 'Детские праздники',
        links: [
          { title: 'День рождения', href: url('/prazdniki/den-rozhdeniya/') },
          { title: 'Выпускные (сады / школы)', href: url('/prazdniki/vypusknye/') },
        ],
      },
      {
        title: 'Взрослые мероприятия',
        links: [
          { title: 'День рождения', href: url('/prazdniki/vzroslye/#den-rozhdeniya') },
          { title: 'Тимбилдинг и корпоративы', href: url('/prazdniki/vzroslye/#korporativy') },
          { title: 'Ночная тренировка', href: url('/prazdniki/vzroslye/#nochnaya-trenirovka') },
        ],
      },
      {
        title: 'Дополнительно',
        links: [
          { title: 'Аквагрим', href: url('/prazdniki/dopolnitelno/#akvagrim') },
          { title: 'Фотограф', href: url('/prazdniki/dopolnitelno/#fotograf') },
        ],
      },
      {
        title: 'Семейное кафе',
        links: [
          { title: 'Меню', href: url('/kafe/#menu') },
          { title: 'Тематическое украшение зоны кафе', href: url('/kafe/#ukrashenie') },
        ],
      },
    ],
  },
  { title: 'Контакты', href: url('/#kontakty') },
];

/** Форма заявки на праздник: «Рассчитать стоимость праздника». */
export const partyRequest = url('/prazdniki/#zayavka');
