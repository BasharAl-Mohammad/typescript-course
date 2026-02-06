// Type alias
type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];

type Guitarist = {
    name?: string,
    active: boolean,
    albums: stringOrNumberArray
}

type UserID = stringOrNumber;

// Literal types

let myName: 'Bashar';
// myName = 'John' this will not work
// myName = 'Bashar' this will work

let userName: 'Dave' | 'John' | 'Amy';
userName = 'Dave'; 
// userName = 'Rachel'; // this will not work

// functions
const add = (a: number, b: number): number => {
    return a + b;
}

const logMsg = (message: any): void => {
    console.log(message);
}

logMsg('Hello!');
logMsg(add(2, 3));
// logMsg(add('a', 3));// this will not work

let subtract = function (c: number, d: number): number {
    return c - d;
}

logMsg(subtract(5, 2));

type mathFunction = (a: number, b: number) => number;
// interface mathFunction {
//     (a: number, b: number): number
// };

let multiply: mathFunction = function (c, d) {
    return c * d;
}

logMsg(multiply(3, 4));


// optional parameters
const addAll = (a: number, b: number, c?: number): number => {
    return a + b + (c ? c : 0);
}
logMsg(addAll(2, 3));
// default parameters
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
    return a + b + c;
}
logMsg(sumAll(2, 3));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3, 2));
logMsg(sumAll(undefined, 3));
// default parameters must be last in the parameter list, otherwise you will get an error
//default params cannot work with interface or type alias, because they are not functions, they are just types


// rest parameters
// rest of the parameters must be last in the parameter list, otherwise you will get an error
const total = (...nums: number[]): number => {
    return nums.reduce((prev, curr) => prev + curr, 0);
}

logMsg(total(1, 2, 3, 4));

// never type explicitly tells typescript that this function will never return anything, it will always throw an error or infinite loop
const createError = (errMsg: string): never => {
    throw new Error(errMsg);
}

const infinitee = () => {
    let i: number = 1;
    while (true) {
        i++;
    }
}
const infinite = () => {
    let i: number = 1;
    while (true) {
        i++;
        if (i > 100) {
            break;
        }
    }
}



const isNumber = (value: any): boolean => {
    return typeof value === 'number' ? true : false; 
}
//use of the never type in a function that should never return anything, but it can throw an error or infinite loop
const numberOrString = (value: number | string): string => {
    if (typeof value === 'string') return `You sent a string: ${value}`;
    if (isNumber(value)) return `You sent a number: ${value}`;
    return createError('This should never happen!');
}