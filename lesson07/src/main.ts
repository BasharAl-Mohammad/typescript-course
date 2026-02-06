// Index Signatures

interface TransactionObject {
    readonly [index: string]: number; // this is an index signature
    Pizza: number;
    Books: number;
    Job: number;
}

// interface TransactionObject {
//     readonly [index: string]: number; // this is an index signature
// }

const todaysTransactions: TransactionObject = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    Dave: 45
}

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);

let prop: string = 'Pizza';
console.log(todaysTransactions[prop]);

const todaysNet = (transactions: TransactionObject): number => {
    let total = 0;
    for (const transaction in transactions) {
        // total += transactions[transaction];
    }
    return total;
}

console.log(todaysNet(todaysTransactions));

// todaysTransactions.Pizza = 40; // Error: Cannot assign to 'Pizza' because it is a read-only property
console.log(todaysTransactions['Dave']);




////////////////////////////////////////////////////////////////////////////////////
interface Student {
    //[key: string]: string | number | number[] | undefined,
    name: string
    GPA: number
    classes?: number[]
}

const student: Student = {
    name: 'Doug',
    GPA: 3.5,
    classes: [100, 200]
}

// console.log(student.test);

for(const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).map(key => {
    console.log(student[key as keyof Student]);
});

const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`)
}

logStudentKey(student, 'GPA');



/////////////////////////////////////////////////////////////////////////////////

// interface Incomes {
//     [key:string]: number
// }

type Streams = 'salary' | 'bonus' | 'sidehustle';

type Incomes = Record<Streams, number>;

const monthlyIncomes: Incomes = {
    salary: 5000,
    bonus: 100,
    sidehustle: 250
}

for(const revenue in monthlyIncomes) {
    console.log(`${revenue}: ${monthlyIncomes[revenue as keyof Incomes]}`);

}