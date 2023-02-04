# 型注釈と型推論
基本的に型推論を使用する。型推論ができない時、型注釈する。
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

# Tuple型
決まった内容の配列を作成するときに使用する
TypeScriptは初期値のチェックは厳しいが、配列への書き込みはできる
ただ、読み込み(参照)をするとエラーが出る

# Enum型
特定のまとまったグループのみを受け入れる型
  const fruits = ['Apple', 'Lemon', 'Melon'];
  const fruit = fruits[0];
  const book: [string, number, boolean] = ['business', 1500, false];
  enum CoffeeSize {
    SHORT,
    TALL = 100,
    GRANDE,
    VENTI,
  }

  const coffee = {
    hot: true,
    size: CoffeeSize.TALL,
  }

  console.log(person.name);
  console.log(CoffeeSize.GRANDE)

# any型
JavaScriptと同じ

let anything: any = true;
// let anythingArray: any[] = [true, 34, 'helllo'];
anything = ['hello', 33, true];
anything = {};
anything.fihae = 'novwa';
let banana = anything;

# union型: 複数の型を定義し、そのどれかに当てはまる型を表している
  => 複数のデータを受け入れることができ、その変数が受け取れるデータ型を制限することができる
let unionType: number | string = 10;
unionType = 'hello';
// unionType.toUpperCase();
let unionTypeArray: (number | string)[] = [21, 'hello'];

# Literal型
特定の決まった値のみ扱う型
constを使用した時点で型推論はLiteral型になる
let を使用した時には string型になる
union型と同時に使用すると便利
const apple = 'apple';
let clothSize: 'small' | 'medium' | 'large' = 'medium';

-> union型 + Literal型 = enum型のようなもの
const cloth = {
  color: 'white',
  size: clothSize
}

const cloth : {
  color: string,
  size: 'small' | 'medium' | 'large'
} = {
  color: 'white',
  size: 'small',
}

# タイプエイリアス
型を変数のように扱うことができる
type ClothSize = 'small' | 'medium' | 'large';
let clothSize : ClothSize = 'large';

const cloth: {
  color: string;
  size: ClothSize
} = {
  color: 'white',
  size: 'medium',
}

# 関数に型を適応させる方法
パラメータには型をつける。戻り値には型推論が効いている
function add(num1: number, num2:number):number {
  return num1 + num2;
}

add(2, 3);

## 変数の戻り値にvoidう型を使用する方法
TypeScriptはundefined型を返すことを許していない
return文を書いた時ならOK。基本的にvoidを使用する
function sayHello(): void {
  console.log('hello');
}
console.log(sayHello())

## undefined
変数が未定義であることを表す変数
undefined型はundefinedとnullを持つことができる

## null
参照を保持していないことを表す。変数が空であることを意図的に表す特別なリテラル

## 関数型を使って特定の関数のみを代入できる変数を作る
const add = (num1: number, num2: number):number => num1 + num2;

型注釈
  - const anotherAdd: (n1: number, n2:number) => number =  add; (addの部分を無名関数にしても良い)
アロー関数の場合
  - const doubleNumber = (number: number):number => number * 2;

型推論
const anotherAdd: (n1: number, n2:number) => number =  add;
const anotherDoubleNumber:(n1: number) => number = doubleNumber;

## callback関数に型をつける
コールバックの関数の型注釈の戻り値はvoidにして、定義側の関数の制限を緩くする
function doubleAndHandle(num: number, cb: (num: number) => void) : void {
  const doubleNumber = cb(num * 2);
  console.log(doubleNumber);
}

doubleAndHandle(2, doubleNum => {
  return doubleAndHandle;
})


# unknown型を使って、柔軟でanyよりも厳しい型を定義する方法
let unknownInput: unknown;
let anyInput: any;
let text: string;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
 text = anyInput; // エラーが発生
text = anyInput;
if(typeof unknownInput === 'string'){
  text = unknownInput
}

# never型を使って、起こり得ない型を使用する方法
function error(message: string): never {
  throw new Error(message);
}

console.log(error('This is an Error'));






