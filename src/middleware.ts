// Каждая HTML-страница проходит через типограф (src/lib/typograf.ts).
// Страницы статические, поэтому middleware работает при сборке и в astro dev.
import { defineMiddleware } from 'astro:middleware';
import { typografHtml } from './lib/typograf';

export const onRequest = defineMiddleware(async (_context, next) => {
  const response = await next();
  if (!response.headers.get('content-type')?.includes('text/html')) return response;

  return new Response(typografHtml(await response.text()), {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
  });
});
