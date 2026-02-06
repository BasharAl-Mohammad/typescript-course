// Literal types
let myName;
// myName = 'John' this will not work
// myName = 'Bashar' this will work
let userName;
userName = 'Dave';
// userName = 'Rachel'; // this will not work
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello!');
logMsg(add(2, 3));
// logMsg(add('a', 3));// this will not work
let subtract = function (c, d) {
    return c - d;
};
logMsg(subtract(5, 2));
// interface mathFunction {
//     (a: number, b: number): number
// };
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(3, 4));
// optional parameters
const addAll = (a, b, c) => {
    return a + b + (c ? c : 0);
};
logMsg(addAll(2, 3));
// default parameters
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(sumAll(2, 3));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3, 2));
logMsg(sumAll(undefined, 3));
// default parameters must be last in the parameter list, otherwise you will get an error
//default params cannot work with interface or type alias, because they are not functions, they are just types
// rest parameters
// rest of the parameters must be last in the parameter list, otherwise you will get an error
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr, 0);
};
logMsg(total(1, 2, 3, 4));
export {};
//# sourceMappingURL=main.js.map