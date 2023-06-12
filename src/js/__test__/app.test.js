import {
  createDeamon, createBowman, createMagician, createSwordsman, createUndead, createZombie,
} from '../app';

test('Deamon whith stats', () => {
  const deamon = createDeamon('Shok', 'Deamon');
  expect(deamon).toEqual({
    name: 'Shok',
    type: 'Deamon',
    health: 100,
    lvl: 1,
    attack: 10,
    defence: 40,
  });
});

test('Bowman whith stats', () => {
  const bowman = createBowman('Muse', 'Bowman');
  expect(bowman).toEqual({
    name: 'Muse',
    type: 'Bowman',
    health: 100,
    lvl: 1,
    attack: 25,
    defence: 25,
  });
});

test('Magician whith stats', () => {
  const magician = createMagician('Luisa', 'Magician');
  expect(magician).toEqual({
    name: 'Luisa',
    type: 'Magician',
    health: 100,
    lvl: 1,
    attack: 10,
    defence: 40,
  });
});

test('Undead whith stats', () => {
  const undead = createUndead('Ralf', 'Undead');
  expect(undead).toEqual({
    name: 'Ralf',
    type: 'Undead',
    health: 100,
    lvl: 1,
    attack: 25,
    defence: 25,
  });
});

test('Zombie whith stats', () => {
  const zombie = createZombie('Oleg', 'Zombie');
  expect(zombie).toEqual({
    name: 'Oleg',
    type: 'Zombie',
    health: 100,
    lvl: 1,
    attack: 40,
    defence: 10,
  });
});

test('Swordsman whith stats', () => {
  expect(createSwordsman('Paul', 'Swordsman')).toEqual({
    name: 'Paul',
    type: 'Swordsman',
    health: 100,
    lvl: 1,
    attack: 40,
    defence: 10,
  });
});

test('Length name < 2', () => {
  expect(() => createSwordsman('P', 'Swordsman')).toThrow('name very short');
});

test('Length name > 10', () => {
  expect(() => createSwordsman('Paulo Maldini', 'Swordsman')).toThrow('name very long');
});

test('string?', () => {
  expect(() => createSwordsman(2234234, 'Swordsman')).toThrow('Name not string');
});

test('type?', () => {
  expect(() => createSwordsman('Paul', 'S')).toThrow('Only Bowman, Swordsman, Magician, Deamon, Undead, Zombie');
});

test('Lvl Up', () => {
  const pers = createSwordsman('Paul', 'Swordsman');
  pers.lvlUp();
  expect(pers).toEqual({
    name: 'Paul',
    type: 'Swordsman',
    lvl: 2,
    health: 100,
    attack: 48,
    defence: 12,
  });
});

test('Health more 0', () => {
  expect(() => {
    const pers = createSwordsman('Paul', 'Swordsman');
    pers.health = 0;
    pers.lvlUp();
  }).toThrow('Dont can lvl up.You die!');
});

test('Check damage', () => {
  const pers = createSwordsman('Paul', 'Swordsman');
  pers.damage(50);
  expect(pers.health).toEqual(55);
});

test('Damage Health >= 0', () => {
  expect(() => {
    const pers = createSwordsman('Paul', 'Swordsman');
    pers.health = 0;
    pers.damage(10);
  }).toThrow('Dont can damage.You die!');
});
