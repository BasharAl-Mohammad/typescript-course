// Index Signatures
// interface TransactionObject {
//     readonly [index: string]: number; // this is an index signature
// }
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    Dave: 45
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
let prop = 'Pizza';
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        // total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
// todaysTransactions.Pizza = 40; // Error: Cannot assign to 'Pizza' because it is a read-only property
console.log(todaysTransactions['Dave']);
const student = {
    name: 'Doug',
    GPA: 3.5,
    classes: [100, 200]
};
// console.log(student.test);
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map(key => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'GPA');
const monthlyIncomes = {
    salary: 5000,
    bonus: 100,
    sidehustle: 250
};
for (const revenue in monthlyIncomes) {
    console.log(`${revenue}: ${monthlyIncomes[revenue]}`);
}
export {};
//# sourceMappingURL=main.js.map