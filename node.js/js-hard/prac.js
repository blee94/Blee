class Dog {
  constructor(kindof, age) {
    this.kinkdof = kindof;
    this.age = age;
  }
  color() {
    console.log("??");
  }
  info() {
    console.log(`my dog is ${this.kinkdof}. his age id ${this.age}.`);
  }
}

const malt = new Dog("maltiz", 19);
console.log(malt);
malt.color();
malt.info();
