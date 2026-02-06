type One = string;
type Two = string | number; 
type Three = 'hello'; 

//convert to more or less specific types

let a: One = 'hello';
let b = a as Two; // upcasting
let c = b as Three; // downcasting

// Type assertions are a way to tell the compiler "trust me, I know what I'm doing". 
// They don't change the runtime behavior of the code, but they can help you to avoid type errors and to work with more specific types.


// this syntax is more uncommon in React projects, it can't be used in tsx files.
let d = <One>'hello'; // alternative syntax for type assertion
let e = <string | number>'hello'; // alternative syntax for type assertion.

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if(c === 'add') return a+b;
    return '' + a + b;
}

let myVal: string = addOrConcat(2, 3, 'concat') as string; // type assertion to string

//be carefull TS see no problem here, but at runtime this will fail
let nextVal: number = addOrConcat(2, 3, 'concat') as number; // type assertion to number

// 10 as string// this will throw an error at runtime
console.log((10 as unknown) as string); // double assertion, first to unknown then to string


// The DOM

// const img = document.querySelector('img') as HTMLImageElement; // type assertion to HTMLImageElement
// const myImg = document.getElementById('#img') as HTMLElement | HTMLImageElement | null; // type assertion to HTMLElement, HTMLImageElement or null
const myImg = document.getElementById('#img')! as HTMLImageElement; // type assertion to HTMLElement, HTMLImageElement or null
const img = document.querySelector('img')!; // type assertion to HTMLImageElement
const nextImg = <HTMLImageElement>document.querySelector('img'); // alternative syntax for type assertion


img.src
myImg.src
nextImg.src