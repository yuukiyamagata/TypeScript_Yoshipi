
type ClothSize = 'small' | 'medium' | 'large';
let clothSize : ClothSize = 'large';

const cloth: {
  color: string;
  size: ClothSize
} = {
  color: 'white',
  size: 'medium',
}

function sayHello(): void {
  console.log('hello');
}
console.log(sayHello())

const add = (num1: number, num2:number):number => num1 + num2;
const doubleNumber = (number: number):number => number * 2;

const anotherAdd: (n1: number, n2:number) => number =  add;
const anotherDoubleNumber:(n1: number) => number = doubleNumber;

function doubleAndHandle(num: number, cb: (num: number) => void) : void {
  const doubleNumber = cb(num * 2);
  console.log(doubleNumber);
}

doubleAndHandle(2, doubleNum => {
  return doubleAndHandle;
})



