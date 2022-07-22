import Team from '../js/app.js';
import Character from '../js/Character.js';

test('should add new Character', () => {
  const team1 = new Team();
  const dog = new Character('barbos', 3);
  team1.add(dog);

  // let result = {level: 3, name: 'barbos'}
  /* не могу разобраться как писать проверку:
  хочу проверить, что time1 содержит result
  */
  //  expect(team1).toHaveProperty(result);
  //  expect(team1).toMatchObject(result);
});
