class Coder {
    constructor(name, music, age, lang = 'TypeScript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age} years old.`;
    }
}
// const Dave = new Coder("Bashar", "Rap", 30, "TypeScript");
const Dave = new Coder("Bashar", "Rap", 30);
console.log(Dave.getAge());
// console.log(Dave.age); // Error: Property 'age' is private and only accessible within class 'Coder'.
// console.log(Dave.lang); // console.log(Dave.secondLang); // Error: Property 'secondLang' does not exist on type 'Coder'.`
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
        // this.computer = computer;
        // super(name, music, age);
    }
    getLang() {
        return `I write code in ${this.lang}`;
    }
}
const Sara = new WebDev("Mac", "Sara", "Lofi", 25);
console.log(Sara.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} is ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist('Jimmy', 'guitar');
console.log(Page.play('strumming'));
/////////////////////////////////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps('John');
console.log(John.id);
console.log(Peeps.count);
const Steve = new Peeps('Steve');
console.log(Steve.id);
console.log(Peeps.count);
const Amy = new Peeps('Amy');
console.log(Amy.id);
console.log(Peeps.count);
///////////////////////////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else {
            throw new Error('Param is not an array of strings');
        }
    }
}
const myBands = new Bands();
myBands.data = ['Metallica', 'Megadeth', 'Anthrax', 'Slayer'];
console.log(myBands.data);
export {};
//# sourceMappingURL=main.js.map