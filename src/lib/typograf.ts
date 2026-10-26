// Типограф всех страниц: src/middleware.ts прогоняет через него готовый HTML.
// Два режима. Текст страницы — полный набор правил ru с неразрывными пробелами.
// Атрибуты (alt, title, aria-label, placeholder), <title> и мета-описания — те же
// тире и кавычки, но без неразрывных пробелов: в метаданных им не место.
import Typograf from 'typograf';

const locale = ['ru', 'en-US'];

// Неразрывный пробел между числом и следующим словом: «6 ключевых», «14 батутов».
// Встроенное common/nbsp/afterNumber выключено по умолчанию и не видит число сразу после тега
// (<span>6 …): теги типограф подменяет метками, закрывающий символ метки — U+F000.
const NBSP = String.fromCharCode(0xa0);
const TAG_MARK = String.fromCharCode(0xf000);
const numberWordRe = new RegExp(String.raw`(^|[\s${TAG_MARK}])(\d{1,5}) (?=[а-яёa-z])`, 'gi');
Typograf.addRule({
  name: 'common/nbsp/afterNumberWord',
  handler: (s) => s.replace(numberWordRe, `$1$2${NBSP}`),
});

const text = new Typograf({ locale, htmlEntity: { type: 'name', onlyInvisible: true } });
// Ручное отключение: <!--notypo-->…<!--/notypo-->.
text.addSafeTag('<!--notypo-->', '<!--/notypo-->');

const plain = new Typograf({ locale });
plain.disableRule(['common/nbsp/*', 'ru/nbsp/*']);

const ATTRS = ['alt', 'title', 'aria-label', 'placeholder'];
const META = ['description', 'og:title', 'og:description', 'og:image:alt', 'twitter:title', 'twitter:description'];

const decode = (s: string) =>
  s
    .replace(/&(?:quot|#34);/g, '"')
    .replace(/&(?:apos|#39);/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&(?:nbsp|#160);/g, ' ')
    .replace(/&amp;/g, '&');

// Правило тире ставит неразрывный пробел даже с выключенными nbsp-группами, поэтому чистим вывод.
const typografPlain = (s: string) => plain.execute(decode(s)).replace(/[   ]/g, ' ');

const escapeAttr = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
const escapeText = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const attrRe = new RegExp(`(\\s(?:${ATTRS.join('|')})=)"([^"]*)"`, 'g');
const metaKeyRe = new RegExp(`\\s(?:name|property)="(?:${META.join('|')})"`);

export function typografHtml(html: string): string {
  // Текст страницы: только <body>, <head> обрабатывается ниже в «плоском» режиме.
  html = html.replace(/(<body\b[^>]*>)([\s\S]*)(<\/body>)/, (_, open, body, close) => open + text.execute(body) + close);

  return html
    .replace(/(<title\b[^>]*>)([\s\S]*?)(<\/title>)/g, (_, open, value, close) => open + escapeText(typografPlain(value)) + close)
    .replace(/<meta\b[^>]*>/g, (tag) =>
      metaKeyRe.test(tag) ? tag.replace(/(\scontent=)"([^"]*)"/, (_, attr, value) => `${attr}"${escapeAttr(typografPlain(value))}"`) : tag,
    )
    .replace(/<[a-z][^>]*>/gi, (tag) => tag.replace(attrRe, (_, attr, value) => `${attr}"${escapeAttr(typografPlain(value))}"`));
}
