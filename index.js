var hasValue = false;
var count = 10;
var float = 3.14;
var negative = -0.12;
var single = 'hello';
var double = "hello";
var back = "hello";
var hello;
hello = "hello";
var person = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 21
};
var fruits = ['Apple', 'Lemon', 'Melon'];
var fruit = fruits[0];
var book = ['business', 1500, false];
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
console.log(person.name);
console.log(CoffeeSize.GRANDE);
// Object.create() メソッドは、既存のオブジェクトを新しく生成されるオブジェクトのプロトタイプとして使用して、新しいオブジェクトを生成します。
