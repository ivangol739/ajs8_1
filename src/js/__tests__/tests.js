import Team from '../App';

const team = new Team();

test('add', () => {
  team.add(1);
  expect(team.members.has(1)).toBeTruthy();
});

test('add error', () => {
  expect(() => team.add(1)).toThrow('Персонаж уже есть!');
});

test('addAll', () => {
  team.addAll(1, 2, 3, 4, 5);
  expect(team.members.has(4)).toBeTruthy();
});

test('toArray', () => {
  expect(team.toArray()).toEqual([1, 2, 3, 4, 5]);
});
