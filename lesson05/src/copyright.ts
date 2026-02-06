// Original code
// const year = document.getElementById("year");
// const thisYear = new Date().getFullYear();
// year.setAttribute("datetime", thisYear);
// year.textContent = thisYear;


// Edited Code
// let year: HTMLElement | null = document.getElementById("year");
// let thisYear: string = new Date().getFullYear().toString();

// if(year) {
//     year.setAttribute("datetime", thisYear);
//     year.textContent = thisYear;
// }

// 2nd Var
const year = document.getElementById("year") as HTMLElement;
let thisYear = new Date().getFullYear().toString() as string;
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
