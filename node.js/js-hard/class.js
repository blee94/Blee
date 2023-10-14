// class는 PascalCase규칙을 이용해 식별자 생성

class Cat {
  // 생성자: 메소드의 일종
  //   (메소드 중에서) Cat클래스를 이용해서 객체를 만드는 순간에 호출되는 메소드
  constructor(name2, age2) {
    this.name = name2;
    this.age = age2;
  }

  //   메소드
  mew() {
    console.log("야옹");
  }
  info() {
    console.log(`이름: ${this.name}, 나이: ${this.age}`);
  }
}

const cat = new Cat("나비", 2);
console.log(cat.name);
cat.mew();
cat.info();
