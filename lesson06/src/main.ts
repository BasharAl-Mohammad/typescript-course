class Coder {

    secondLang!: string;

    constructor(
        public  readonly name: string, 
        public music: string, 
        private age: number, 
        protected lang: string = 'TypeScript'
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }

    public getAge() {
        return `Hello, I'm ${this.age} years old.`;
    }
}

// const Dave = new Coder("Bashar", "Rap", 30, "TypeScript");
const Dave = new Coder("Bashar", "Rap", 30);
console.log(Dave.getAge());
// console.log(Dave.age); // Error: Property 'age' is private and only accessible within class 'Coder'.
// console.log(Dave.lang); // console.log(Dave.secondLang); // Error: Property 'secondLang' does not exist on type 'Coder'.`

class WebDev extends Coder {
    constructor (
        public computer: string,
        name: string,
        music: string,
        age: number
    ) {
        super(name, music, age);
        this.computer = computer;
        // this.computer = computer;
        // super(name, music, age);
    }

    public getLang() {
        return `I write code in ${this.lang}`;
    }
}

const Sara = new WebDev("Mac", "Sara", "Lofi", 25);

console.log(Sara.getLang());
// console.log(Sara.age); // Error: Property 'age' is private and only accessible within class 'Coder'.
// console.log(Sara.lang); // Error: Property 'lang' is protected and only accessible within class 'Coder' and its subclasses.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


interface Musician {
    name: string;
    instrument: string;
    play(action: string): string;
}

class Guitarist implements Musician {
    name: string;
    instrument: string;

    constructor(name: string, instrument: string) {
        this.name = name;
        this.instrument = instrument;
    }

    play(action: string): string {
        return `${this.name} is ${action} the ${this.instrument}`;
    }
}


const Page = new Guitarist('Jimmy' , 'guitar');
console.log(Page.play('strumming'));
/////////////////////////////////////////////////////////////////////

class Peeps {
    static count: number = 0;

    static getCount(): number {
        return Peeps.count;
    }

    public id: number;

    constructor(public name: string) {
        this.name = name;
        this.id = ++Peeps.count;
    }
}

const John = new Peeps('John');
console.log(John.id)
console.log(Peeps.count)
const Steve = new Peeps('Steve');
console.log(Steve.id)
console.log(Peeps.count)
const Amy = new Peeps('Amy');
console.log(Amy.id)
console.log(Peeps.count)
///////////////////////////////////////////////////////


class Bands {
    private dataState: string[];

    constructor() {
        this.dataState = [];
    }

    public get data(): string[] {
        return this.dataState;
    }
     
    public set data(value: string[]) {
        if(Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        } else {throw new Error('Param is not an array of strings');}
    }
}

const myBands = new Bands();
myBands.data = ['Metallica', 'Megadeth', 'Anthrax', 'Slayer'];
console.log(myBands.data);