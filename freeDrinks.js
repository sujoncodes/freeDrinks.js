// let burgerPrice = 400;
// let drinks = 30;

// if(burgerPrice >= 500){
//     console.log("Borh you can get a free drinks")
// }
// else{
//     console.log("Buy coke: 30tk")
// };

// const marks = 90;
// let Results;

// if(marks >= 90 && marks <= 100){
//     Results = "Grade-A"
// } else if(marks >= 80){
//     Results = "Grade-B"
// } else if(marks >= 70){
//     Results = "Grade-C"
// } else if(marks >= 60){
//     Results = "Grade-D"
// } else{
//     Results = "Grade-F"
// }
// console.log(Results);



const marks = 999;
let Results;

if(marks > 100 || marks < 0){
    Results = "invalid"
} else if (marks >= 90 && marks <= 100) {
    Results = "Grade-A";
} else if (marks >= 80) {
    Results = "Grade-B";
} else if (marks >= 70) {
    Results = "Grade-C";
} else if (marks >= 60) {
    Results = "Grade-D";
} else {
    Results = "Grade-F";
}

console.log(Results);
