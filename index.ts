let hasValue = false;
let count = 10;
let float = 3.14;
let negative = -0.12;
let single = 'hello';
let double = "hello";
let back = `hello`;

let hello: string;
hello = "hello";

const person = {
  name: {
    first: 'Jack',
    last: 'Smith',
  },
  age: 21,
}

const fruits = ['Apple', 'Lemon', 'Melon'];
const fruit = fruits[0];

const book: [string, number, boolean] = ['business', 1500, false];

enum CoffeeSize {
  SHORT,
  TALL,
  GRANDE,
  VENTI,
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL,
}

console.log(person.name);
console.log(CoffeeSize.GRANDE)
// Object.create() メソッドは、既存のオブジェクトを新しく生成されるオブジェクトのプロトタイプとして使用して、新しいオブジェクトを生成します。