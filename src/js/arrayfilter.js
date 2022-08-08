export const heroArray = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

export function arrayFilter(arr) {
  const newArray = arr.sort((a, b) => b.health - a.health);
  return newArray;
}
