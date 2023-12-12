// let srt
let str: string = 'hello';

console.log(str);

let undef: undefined;

let nu: null = null;

let arr: number[] = [1, 2, 3, 4];

let strArr: string[] = ['a', 'b', 'c'];
let strArr2: Array<String> = ['a', 'b', 'c'];

let numStrArr: (number | string)[] = [1, 2, 'a', 'b'];
let abc: number | string = 'a';
abc = 5;

// ts에서 any를 사용하는건 지양해야 함.
let anyArr: any[] = [1, 2, 'f', null, undefined, {}];

let obj: object = {
  name: 'blee',
  age: 12,
};

let drink: [string, number];
drink = ['guarana', 23];
drink[0] = 'drpepper';

let drink2: readonly [string, number];
drink = ['guarana', 23];

let olimpic_newgame: readonly [object, boolean] = [
  {
    name: '쇼트트랙',
    type: '혼성 계주',
  },
  true,
];
console.log(olimpic_newgame);

olimpic_newgame[1] = false;
