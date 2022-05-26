import Team from '../team';
import Character from '../character';

test('shoul test Team', () => {
  const team = new Team();
  team.add(new Character('Unit'));
  team.add(new Character('Unit'));
  team.add(new Character('Unit'));
  team.add(new Character('Unit'));
  team.add(new Character('Unit'));
  team.add(new Character('Unit'));
  for (const pers of team) {
    expect(pers).toEqual({
      name: 'Unit',
      type: 'person',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    });
  }
});