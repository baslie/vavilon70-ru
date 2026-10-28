// Формы заявок (docs/TZ.md: праздник, аренда арены, ночная тренировка, старт группы Ninja 18+,
// банкет, сертификат). Сайт статический, своего сервера нет.
// TODO: куда отправлять заявки — открытый вопрос #22 (Telegram администратору, почта, сервис форм).
// Пока formEndpoint пустой, форма не отправляется: RequestForm показывает телефон администратора.
export const formEndpoint = '';

// TODO: реквизиты оператора персональных данных и ссылка на политику — открытый вопрос #23.
// Без них формы с именем и телефоном на боевой домен не выпускаем.
export const privacyPolicyHref: string | null = null;

export type Field = {
  name: string;
  label: string;
  type: 'text' | 'tel' | 'date' | 'number' | 'select' | 'textarea';
  required?: boolean;
  autocomplete?: string;
  placeholder?: string;
  options?: string[];
  /** На всю ширину формы (комментарий). */
  wide?: boolean;
};

export type RequestFormConfig = { title: string; text: string; fields: Field[]; submit: string };

const name: Field = { name: 'name', label: 'Имя', type: 'text', required: true, autocomplete: 'name' };
const phone: Field = { name: 'phone', label: 'Телефон', type: 'tel', required: true, autocomplete: 'tel', placeholder: '+7' };
const date: Field = { name: 'date', label: 'Желаемая дата', type: 'date' };
const guests: Field = { name: 'guests', label: 'Сколько гостей', type: 'number' };
const comment: Field = { name: 'comment', label: 'Комментарий', type: 'textarea', wide: true };

export const forms = {
  party: {
    title: 'Рассчитать стоимость праздника',
    text: 'Оставьте контакты и расскажите о празднике — администратор перезвонит, подберёт программу и рассчитает стоимость.',
    fields: [
      name,
      phone,
      { name: 'event', label: 'Что празднуем', type: 'select', options: ['День рождения 4–7 лет', 'День рождения 8–18 лет', 'Выпускной', 'День рождения 18+', 'Тимбилдинг или корпоратив', 'Другое'] },
      date,
      guests,
      comment,
    ],
    submit: 'Рассчитать стоимость',
  },
  arena: {
    title: 'Забронировать арену',
    text: 'Оставьте контакты — администратор перезвонит, подтвердит время и назовёт стоимость аренды.',
    fields: [name, phone, date, guests, comment],
    submit: 'Забронировать арену',
  },
  night: {
    title: 'Узнать дату ближайшей ночи',
    text: 'Оставьте телефон — сообщим, когда пройдёт ближайшая ночная тренировка.',
    fields: [name, phone, guests],
    submit: 'Узнать дату',
  },
  ninjaStart: {
    title: 'Узнать о старте группы',
    text: 'Оставьте телефон — позвоним, как только откроется запись во взрослую секцию Ninja-трассы.',
    fields: [name, phone],
    submit: 'Узнать о старте группы',
  },
  banquet: {
    title: 'Согласовать банкетное меню',
    text: 'Оставьте контакты — администратор поможет выбрать блюда и подтвердит депозит.',
    fields: [name, phone, date, guests, comment],
    submit: 'Согласовать меню',
  },
  certificate: {
    title: 'Оформить сертификат',
    text: 'Оставьте контакты и напишите, на какую услугу нужен сертификат, — администратор подготовит его к нужной дате.',
    fields: [
      name,
      phone,
      { name: 'service', label: 'На что сертификат', type: 'select', options: ['Абонемент в секцию', 'Персональная тренировка', 'Комплексный билет'] },
      comment,
    ],
    submit: 'Оформить сертификат',
  },
} satisfies Record<string, RequestFormConfig>;
