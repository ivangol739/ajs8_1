export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(pers) {
    if (this.members.has(pers)) {
      throw new Error('Персонаж уже есть!');
    } this.members.add(pers);
  }

  addAll(...persi) {
    persi.forEach((el) => this.members.add(el));
  }

  toArray() {
    return Array.from(this.members);
  }
}
