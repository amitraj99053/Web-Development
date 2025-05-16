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

let mode = "dark";
let color;
// colour check
if (mode === "dark") {
    color = "black";
}

if (mode === "light") {
    color = "white";
}
console.log(color);


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