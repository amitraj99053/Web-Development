console.log("First Class");
console.log("Amit Kumar");
console.log("Tony Stark");

let Fname = 'Amit';
let Lname = 'Kumar';
let age = 22;
let price = 156000;
let radius = 14;
let a = null;
let y = undefined;
let isFlow = true;
let r = 5;
let circle = 3.14*r*r;
let num1 = 16;
let num2 = 5;
let num3 = BigInt("8");
let name = Symbol("Hello!"); 

const student = {
    fullName: "Rajesh Kumar",
    age: 22,
    cgpa: 8.2,
    isPass: true,
};

const product = {
    title: "Ball Pen",
    rating: 4,
    offer: 7,
    price: 270,
};


// instagram profile infromation
const profile = {      
    userName: "Amit_kr_01",
    isFollow: false,
    post: 195,
    followers: 569000,
    follow: 4,
    AccType: "Entrepreneur",
    discription: "A Developer | Instructor at Rovolo Group of Companies",
}


console.log("Full Name : " +Fname +" "+Lname);
console.log("Age is : " +age);
console.log("Price : " +price);
console.log("Radius : " +radius);
console.log("Null : " +a);
console.log("Undefined : " +undefined);
console.log("IsFlow : " +isFlow);
console.log("Circle : " +circle);
console.log("Sum : " +(num1 + num2));
console.log("Sub : " +(num1 - num2));
console.log("Mul : " +(num1 * num2));
console.log("Div : " +(num1 / num2));
console.log("Remainder : " +(num1 % num2));
console.log("Power : ", 5 ** 2);

console.log("Object of studnet : " + student.fullName, student.age, student.cgpa); // object key accessing method 1
console.log("Object of student : " + student["fullName"], student["age"], student["cgpa"]); // object key accessing method 2
// console.log("Object of student : " + student[fullName], student[age], student[cgpa]);    // wrong 
console.log(student);
console.log(product);

console.log(typeof profile);  // to check type
console.log(typeof profile["followers"]);


