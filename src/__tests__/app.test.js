import Team from '../js/app.js';
import Character from '../js/Character.js';

test('should add new Character', () => {
  const team1 = new Team();
  const dog = new Character('barbos', 3);
  team1.add(dog);

  const result = { level: 3, name: 'barbos' };
  // Проверяем что массивы сходятся
  expect(team1.toArray()).toEqual([result]);
  // Проверяем что в массиве есть нужное значение
  expect(team1.toArray()).toContainEqual(result);
  // Проверяем что members содержит объект который мы передали в team1
  expect(team1.members.has(dog)).toBeTruthy();
});

test('should throw error', () => {
  const team1 = new Team();
  const dog = new Character('barbos', 3);
  team1.add(dog);

  expect(() => team1.add(dog)).toThrow(Error);
});
