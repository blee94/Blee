class House {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    console.log(
      `this building was built in ${new Date().getFullYear() - this.year}`
    );
  }
}

const home = new House("아파트", 10);
console.log(home.age());

// ---------클래스 상속

class Apartment extends House {
  constructor(name, year, floor) {
    // super: 부모의 생성자 호출
    super(name, year);
    this.floor = floor;
  }

  // 오버라이딩: 부모에 있는 메소드를 자식이 다시 정의
  age() {
    super.age();
    console.log(
      `this building will be built in${new Date().getFullYear() + this.year}`
    );
  }
}

const apt = new Apartment("aa", 2, 30);
console.log(apt);
console.log(apt.age());

class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

let rec = new Shape(3, 4);
console.log(rec.getArea());

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  getArea2() {
    return Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2));
  }
}

let rect = new Rectangle(5, 6);
console.log("대각선 길이:", rect.getArea2());

class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  getAreaTri() {
    return this.getArea() / 2;
  }
}
let tri = new Triangle(4, 5);
console.log("삼각형 넓이:", tri.getAreaTri());

class Circle extends Shape {
  constructor(width, height, radius) {
    super(width, height);
    this.radius = radius;
  }
  getAreaCir() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

let cir = new Circle(0, 0, 5);
console.log("원 넓이", cir.getAreaCir());
