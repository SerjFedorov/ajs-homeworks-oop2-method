export const paramsClass = {
  Bowman: {
    attack: 25,
    defence: 25,
  },
  Swordsman: {
    attack: 40,
    defence: 10,
  },
  Magician: {
    attack: 10,
    defence: 40,
  },
  Undead: {
    attack: 25,
    defence: 25,
  },
  Zombie: {
    attack: 40,
    defence: 10,
  },
  Deamon: {
    attack: 10,
    defence: 40,
  },
};

export default class Character {
  constructor(name, type) {
    this.name = this.setName(name);
    this.type = this.setType(type);
    this.setParams(); // вызовем метод для получения знаечний
  }

  setParams() { // метод для установки значений
    this.health = 100;
    this.lvl = 1;
    this.attack = paramsClass[this.type].attack;
    this.defence = paramsClass[this.type].defence;
  }

  setName(name) { // метод для проверки длины имени и на строку
    this.name = name;
    if (typeof name !== 'string') {
      throw new Error(' Name not string');
    }
    if (name.length > 10) {
      throw new Error(' name very long');
    }
    if (name.length < 2) {
      throw new Error(' name very short');
    }
    return name;
  }

  setType(type) {
    if (type in paramsClass) {
      return type;
    }
    this.type = type;
    throw new Error('Only Bowman, Swordsman, Magician, Deamon, Undead, Zombie');
  }

  lvlUp() {
    if (this.health > 0) {
      this.lvl += 1;
      this.attack += this.attack * (20 / 100);
      this.defence += this.defence * (20 / 100);
      this.health = 100;
    } else {
      throw new Error('Dont can lvl up.You die!');
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.points = points;
      this.health -= points * (1 - paramsClass[this.type].defence / 100);
    } else {
      throw new Error('Dont can damage.You die!');
    }
  }
}
