// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Пока домен vavilon70.ru смотрит на Tilda, прототипы живут на GitHub Pages аккаунта
// по адресу репозитория. При переезде: site → 'https://vavilon70.ru',
// base убрать, добавить public/CNAME.
export default defineConfig({
  site: 'https://roman-purtow.ru',
  base: '/vavilon70-ru',
  vite: {
    plugins: [tailwindcss()],
  },
});
