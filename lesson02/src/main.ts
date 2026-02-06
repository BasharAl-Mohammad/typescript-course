// let myName: string = 'Bashar';
// myName = 42; TS does not allow this because we declared myName as a string, and 42 is a number. This will cause a type error.

// let myName: string;

// myName = 'Bashar'; // This is valid because we are assigning a string value to myName, which is declared as a string.
// myName = 'Dave'; // This is valid because as well, we are assigning a string value to myName.

let myName: string = 'Bashar';
let meaningOfLife: number;
let isLoading: boolean;
// let album: any;
let album: string | number;

myName = 'John';
meaningOfLife = 42;
isLoading = true;
album = 'Van Halen - 1984';
album = 1984;
// album = true; // This is valid because album is declared as any, which means it can hold any type of value. However, it's generally not recommended to use any unless necessary, as it defeats the purpose of TypeScript's type safety.

const sum = (a:number, b:string) => { 
    return a+b;
}


let postId: string | number;
let isActive: number | boolean;

let re: RegExp = /\w+/g;