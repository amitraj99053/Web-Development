let a = 8;
let b = 3;

// arithmetic operation
console.log("a = ", a, " & b = ", b);
console.log("a + b = ", a+b);
console.log("a - b = ", a-b);
console.log("a * b = ", a*b);
console.log("a / b = ", a/b);
console.log("a % b = ", a%b);      // modulus
console.log("a ** b = ", a**b);    // Exponentiation
console.log(" ");

// unary opr
console.log("a++ = ", a++);        // post increment
console.log(a);
console.log("++a = ", ++a);        // pre  increment
console.log("a-- = ", a--);        // post dec
console.log(a);
console.log("--a = ", --a);        // pre dec
console.log(" ");


// Assignment opr
let c = 9;
let d = 5;

// it's eligible to all arithmetic opr
console.log("c = ", c, " & d = ", d);
console.log("c += 2 ", c += 2);        // c = c + 2     (c=9)    11
console.log("d -= 3 ", d -= 3);        // d = d - 3     (d=5)     2


// comparison opr
let e = 4;
let f = 2;

console.log("e == f ", e == f);
console.log("e === f ", e === f);
console.log("2 == 2 ", 2 == "2");
console.log("2 === 2 ", 2 === "2");    // it will compare with value
console.log("e != f ", e != f);


// Logical opr
let g = 9;
let h = 9;

console.log("g < h && g === h ", g < h && g == h);   // both have to true in && opr
console.log("g = h && g == h ", g = h && g == h);

console.log("g < h || g === h ", g < h || g == h);   // any one have to true to for true other wise false
console.log("g < h || g === h ", g = h || g == h);

console.log("!(g < h) ", !(g < h)); // not opr



// conditional statement

let mode = "silver";
let color;
// colour check
if (mode === "dark") {
    color = "black";
} else if (mode === "blue") {
    color = "blue";
} else if (mode === "pink") {
    color = "pink";
} else {
    color = "white";
}
console.log("Color : ",color);


// voting check
let age = 18;

if (age >= 18) {
    console.log("Vote");
} else {
    console.log("Not eligible to vote");
}


// check odd even
let num = 11;

if (num % 2 == 0) {
    console.log("Even");
} else {
    console.log("Odd");
}


// age level
if (age < 18) {
    console.log("Junior");
} else if (age > 60) {
    console.log("Senior");
} else {
    console.log("Middele");
}

// ternary operator
let resultOfAge = age > 18 ? "Adult" : "Not Adult";
console.log(resultOfAge);

age > 18 ? console.log("Adult") : console.log("Not Adult");


// student grading based on performance
let marks = 94;

if (marks >= 90 && marks <= 100) {
    console.log("A");
} else if (marks >= 70 && marks <= 89) {
    console.log("B");
} else if (marks >= 60 && marks <= 69) {
    console.log("C");
} else if (marks >= 50 && marks <= 59) {
    console.log("D");
} else if (marks >= 0 && marks <= 49) {
    console.log("Fail");
} else {
    console.log("Invalid data");
}

alert("Alert Notification"); // alert notification
let enterNum = prompt("Enter a number : "); // alert with input function


// check num is multiple of 5 with input
if (enterNum % 5 == 0) {
    console.log(enterNum, " is multiple of 5");
} else {
    console.log(enterNum, " is not multiple of 5");
}



