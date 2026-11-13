// На планшете (md) ряды полные, три в ряд (docs/BRAND.md, «Полные ряды»): сетка из 6 колонок,
// карточка на 2 (три в ряд) или на 3 (две в ряд). 3, 6 — по три; 2, 4 — по две; 5 = 2 + 3; 7 = 2 + 2 + 3.
export const mdSpan = (i: number, n: number) => {
  if (n === 1) return 'md:max-lg:col-span-6';
  const r = n % 3;
  const wide = r === 1 ? (n === 1 ? 1 : 4) : r === 2 ? 2 : 0;
  return i < wide ? 'md:max-lg:col-span-3' : 'md:max-lg:col-span-2';
};
