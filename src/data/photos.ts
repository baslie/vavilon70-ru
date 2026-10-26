// Временные фото, сгенерированы через royal-techno-engine до съёмки в зале.
// Заменить на реальные фото «Вавилона», сохранив ключи.
import type { ImageMetadata } from 'astro';
import type { PhotoKey } from './content';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.jpg', { eager: true });

function pick(name: string): ImageMetadata {
  const file = files[`../assets/photos/2026-10-20-vavilon-${name}.jpg`];
  if (!file) throw new Error(`Нет фото ${name}`);
  return file.default;
}

export const photos: Record<PhotoKey, ImageMetadata> = {
  jump: pick('11-jump-01'),
  jumpTall: pick('12-jump-tall-02'),
  ninja: pick('13-ninja-02'),
  arena: pick('14-arena-02'),
  party: pick('15-party-01'),
  football: pick('16-football-01'),
  coach: pick('17-coach-01'),
  texture: pick('18-texture-01'),
  textureAlt: pick('18-texture-03'),
};

export const alts: Record<PhotoKey, string> = {
  jump: 'Подросток в прыжке над батутом в тёмном зале с фиолетовой подсветкой',
  jumpTall: 'Девушка в высоком прыжке под фермами с фиолетовыми лампами',
  ninja: 'Девочка проходит рукоход на Ninja-трассе',
  arena: 'Батутная арена с поролоновой ямой и футбольным полем',
  party: 'Дети прыгают на дне рождения вместе с аниматором',
  football: 'Дети играют в мини-футбол на крытом поле',
  coach: 'Тренер страхует ребёнка на спортивном батуте',
  texture: 'Ткань формы с фиолетовыми, красными и белыми молниями',
  textureAlt: 'Ткань формы с фиолетовыми, красными и белыми молниями',
};
