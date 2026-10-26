// Меню и карта сайта по ТЗ (docs/TZ.md, «Шапка и меню»). Тренировки и секции в меню внутри
// «Услуг и цен», поэтому и адреса у них под /uslugi/. Скрыты пункты из «Открытых вопросов»:
// Зона PS5 (#11), Аниматоры и квесты и Новогодние программы (#14). «Акции» (#13) — заглушка.

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
          { title: 'Тренировки с инструктором', href: url('/uslugi/personalnye-trenirovki/') },
          { title: 'Детские секции', href: url('/uslugi/detskie-sekcii/') },
          { title: 'Взрослые секции', href: url('/uslugi/vzroslye-sekcii/') },
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
          { title: 'День рождения 18+', href: url('/prazdniki/vzroslye/#den-rozhdeniya') },
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
  { title: 'Акции', href: url('/akcii/') },
  // Подвал с контактами есть на каждой странице.
  { title: 'Контакты', href: '#kontakty' },
];

/** Форма заявки на праздник: «Рассчитать стоимость праздника». */
export const partyRequest = url('/prazdniki/#zayavka');

export type StubSection = { id: string; title: string };
export type Stub = { path: string; name: string; title?: string; lead?: string; sections?: StubSection[] };

// Страницы-заглушки, пока нет настоящих: src/pages/[...stub].astro. Заголовки и вводные — из ТЗ.
// Настоящая страница по тому же адресу перекрывает заглушку, запись отсюда тогда удаляем.
// id секций — якоря из меню выше.
export const stubs: Stub[] = [
  { path: '/o-centre/', name: 'О центре', lead: '«Вавилон» в ТРЦ «Мегаполис» — это спортивно-развлекательный комплекс, где собраны 6 ключевых направлений для активного отдыха, спорта и праздников.' },
  {
    path: '/uslugi/',
    name: 'Услуги и цены',
    lead: 'Выберите удобный формат отдыха — разовое посещение, тренировка с инструктором, прохождение Ninja-трассы или организация праздника под ключ.',
    sections: [
      { id: 'kompleksnyj-bilet', title: 'Комплексный билет (2 часа, «всё включено»)' },
      { id: 'podgotovka', title: 'Подготовка к визиту: 3 простых шага' },
    ],
  },
  { path: '/uslugi/svobodnye-pryzhki/', name: 'Свободные прыжки', lead: 'Возраст: от 4 лет (дети от 4 до 8 лет занимаются с акцентом на развлекательную зону).' },
  { path: '/uslugi/ninja-trassa/', name: 'Ninja-трасса', title: 'Полоса препятствий Ninja-трасса', lead: 'Для тех, кто хочет проверить силу хватки, баланс, пройти испытания на время и почувствовать себя настоящим ниндзя.' },
  { path: '/uslugi/mini-futbol/', name: 'Мини-футбол', title: 'Аренда футбольной арены', lead: 'Арена с мягким искусственным газоном, мяч предоставляется.' },
  { path: '/uslugi/personalnye-trenirovki/', name: 'Тренировки с инструктором', title: 'Персональные тренировки с инструктором', lead: 'Для детей и взрослых, которые хотят индивидуальный подход — от преодоления неуверенности и постановки базовой техники прыжков до освоения элементов фристайла и уверенного контроля тела в воздухе.' },
  {
    path: '/uslugi/detskie-sekcii/',
    name: 'Детские секции',
    title: 'Спортивные секции',
    sections: [
      { id: 'fristajl', title: 'Батутный фристайл' },
      { id: 'nfp', title: 'Развивающая гимнастика и ОФП' },
      { id: 'ninja', title: 'Секция Ninja-трасса' },
      { id: 'pervaya-trenirovka', title: 'Как проходит первая тренировка' },
    ],
  },
  {
    path: '/uslugi/vzroslye-sekcii/',
    name: 'Взрослые секции',
    title: 'Альтернативный фитнес, драйв и новые навыки для взрослых',
    lead: 'Сбросьте стресс после рабочего дня, подтяните форму и научитесь управлять своим телом в воздухе или на полосе препятствий. Занятия проходят под руководством опытных инструкторов в группе единомышленников.',
    sections: [
      { id: 'fristajl', title: 'Батутный фристайл (18+)' },
      { id: 'ninja', title: 'Секция Ninja-трасса для взрослых' },
    ],
  },
  { path: '/uslugi/sertifikaty/', name: 'Подарочные сертификаты', lead: 'Сертификат на абонемент в секцию, персональную тренировку или комплексный билет.' },
  {
    path: '/prazdniki/',
    name: 'Праздники',
    lead: 'Дни рождения, выпускные, детские праздники и взрослые корпоративы (тимбилдинги) под ключ.',
    sections: [{ id: 'zayavka', title: 'Рассчитать стоимость праздника' }],
  },
  { path: '/prazdniki/den-rozhdeniya/', name: 'День рождения', title: 'Дни рождения и праздники в «Вавилоне»', lead: 'Организуем яркие праздники «под ключ»: захватывающие программы, Ninja-трасса, батутная арена, футбольное поле, профессиональные ведущие, инструкторы и зона отдыха в нашем семейном кафе.' },
  { path: '/prazdniki/vypusknye/', name: 'Выпускные', title: 'Яркий выпускной и окончание учебного года в «Вавилоне»!', lead: 'Ищете место, где весь класс или группа детского сада смогут отдохнуть без скучных застолий? Мы организуем динамичные праздники «под ключ»: активные программы на батутах и Ninja-трассе, командные челленджи, работа инструкторов, ведущие и зона для угощений в нашем семейном кафе.' },
  {
    path: '/prazdniki/vzroslye/',
    name: 'Взрослые мероприятия',
    sections: [
      { id: 'den-rozhdeniya', title: 'День рождения (18+)' },
      { id: 'korporativy', title: 'Тимбилдинг и корпоративы' },
      { id: 'nochnaya-trenirovka', title: 'Ночная тренировка' },
    ],
  },
  {
    path: '/prazdniki/dopolnitelno/',
    name: 'Дополнительные услуги',
    title: 'Сделайте ваш праздник ярким и без лишних хлопот!',
    lead: 'Дополните ваше мероприятие или визит яркими деталями, чтобы праздник запомнился каждому гостю!',
    sections: [
      { id: 'akvagrim', title: 'Аквагрим' },
      { id: 'fotograf', title: 'Профессиональный фотограф' },
    ],
  },
  {
    path: '/kafe/',
    name: 'Семейное кафе',
    title: 'Семейное кафе «Вавилон» — вкусная пауза и комфортный отдых',
    lead: 'Уютное отдельное пространство для родителей и детей на территории комплекса. Здесь можно спокойно перекусить после тренировки, обсудить впечатления или организовать яркое праздничное застолье без шума игровой зоны.',
    sections: [
      { id: 'menu', title: 'Наше меню' },
      { id: 'ukrashenie', title: 'Тематическое украшение и сервировка' },
    ],
  },
  { path: '/akcii/', name: 'Акции', lead: 'Скоро здесь появятся акции.' },
];
