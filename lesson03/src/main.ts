let stringArr = ['one', 'hey', 'Bashar'];

let guitars = ['Strat', 'Les Paul', 5150];

let mixedData = ['EVH', 1984, true];

// stringArr[0] = 42;// will give an error because stringArr is an array of strings and 42 is a number
stringArr[0] = 'John';
// stringArr.push(42); // will give an error because stringArr is an array of strings and 42 is a number
stringArr.push('hey');

guitars[0] = 1984; // will not give an error because guitars is an array of mixed types (string and number)
guitars.unshift('Jim'); // will not give an error because guitars is an array of mixed types (string and number)
// guitars.unshift(true); // will not give an error because guitars is an array of mixed types (string and number)

// stringArr = guitars; // will give an error because stringArr is an array of strings and guitars is an array of mixed types (string and number)

guitars = stringArr; // will not give an error because guitars is an array of mixed types (string and number) and stringArr is an array of strings
// guitars = mixedData; // will not give an error because guitars is an array of mixed types (string and number) and mixedData is an array of mixed types (string, number, boolean)

let test = []; // now it has empty
let bands: string[] = []; // explicitly defining an array of strings
bands.push('Van Halen');
// bands.push(1984); // will give an error because bands is an array of strings and 1984 is a number
// bands.push(true); // will give an error because bands is an array of strings and true is a boolean

// tuple - more specific array with defined types at each index
let myTuple: [string, number, boolean] = ['Bashar', 42, true];

let mixed = ['John', 1, false];
mixed=myTuple // mixed is an array that accepts any type so it can accept a tuple
// myTuple = mixed; // will give an error because mixed is an array that accepts any type and myTuple is a tuple with defined types at each index


//objectslet myObj: object;
let myObj: object;
myObj = [];
console.log(typeof myObj)
myObj = bands // that's okau
myObj = {} // this will work


const exampleObj = {
    prop1: 'Bashar',
    prop2: true
}

exampleObj.prop1 = 'John'; // that's okay
// exampleObj.prop1 = 42; // will give an error because prop1 is a string
exampleObj.prop2 = false; // that's okay
// exampleObj.prop2 = 'Hello'; // will give an error because prop2 is a boolean
// exampleObj.prop3 = 42; // will give an error because prop3 does not exist in exampleObj


// type or interface - to define the shape of an object
interface Guitarist {
    name?: string,
    active: boolean, // ? to make the property optional
    albums: (string | number)[]
}

// This will give an error because the active property is missing and it is required in the Guitarist type
// let evh: Guitarist = {
//     name: 'Eddie Van Halen',
//     albums: [1984, 5150, 'OU812']
// }

let evh: Guitarist = {
    // name: 'Eddie Van Halen',
    active: false,
    albums: [1984, 5150, 'OU812']
}

let JP: Guitarist = {
    name: 'Jimmy Page',
    active: true, // this is optional so it can be omitted (?)
    albums: ['I','II','IV']
}

// evh = JP

// this will give an error because JP is missing the active property and it is a type of Guitarist
// let evh: Guitarist = {
//     name: 'Eddie Van Halen',
//     active: false,
//     albums: [1984, 5150, 'OU812']
// }

// let JP = {
//     name: 'Jimmy Page',
//     albums: ['I','II','IV']
// }

// evh = JP


// evh.years = 40; // will give an error because years does not exist in the Guitarist type


const greetGuitarist = (guitarist: Guitarist) => {
    // if(guitarist.name){
    //     return `Hello ${guitarist.name.toUpperCase()}!`
    // }
    // return 'Hello!';
    return `Hello${guitarist.name ? ' '+guitarist.name.toUpperCase() : ''}!`

}
console.log(greetGuitarist(evh))
console.log(greetGuitarist(JP))


// enums
//unlike most typescript features, enums not a type-level addition to js but something added to the language and runtime
enum Grade {
    U = 1,
    D,
    C,
    B,
    A
}

console.log(Grade.U)