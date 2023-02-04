var clothSize = 'large';
var cloth = {
    color: 'white',
    size: 'medium'
};
function sayHello() {
    console.log('hello');
}
console.log(sayHello());
var add = function (num1, num2) { return num1 + num2; };
var doubleNumber = function (number) { return number * 2; };
var anotherAdd = add;
var anotherDoubleNumber = doubleNumber;
function doubleAndHandle(num, cb) {
    var doubleNumber = cb(num * 2);
    console.log(doubleNumber);
}
doubleAndHandle(2, function (doubleNum) {
    return doubleAndHandle;
});
function error(message) {
    throw new Error(message);
}
console.log(error('This is an Error'));
