// print hello 5 times
for (let i = 1; i <= 5; i++) {
    console.log("Hello!");
}

// print sum of 5 no
let sum = 0;
let n = 5;
for (let j = 1; j <= n; j++) {
    sum = sum +  j;
}
console.log("Sum : ", sum);



//  while loops
let i = 1;
while(i <= 5) {
    console.log("i = ", i);
    i++;
}
console.log(" ");


// do while loops
let j = 1;
do {
    console.log("j = ", j);
    j++;
} while(j <= 10);
console.log(" ");


// for-of loops is used for string only
let str = "JavaScript";
let size = 0;

 for(let i of str) {
    console.log("i : ", i);
    size++;
 }
 console.log("String Size : ", size);
 console.log(" ");


 // for-in loop is used for object/array
 let student = {
    name: "Amit Kumar",
    age: 22,
    cgpa: 8.6,
    isPass: true,
 };

 for (let key in student) {
    console.log("key = ", key, " value = ", student[key]);
 }
 console.log(" ");



 // Practice Qs1
 for (let count = 0; count <= 100; count++) {
    if (count % 2 == 0) {
        console.log(" Num : ", count);
    }
 }
 console.log(" ");


 // Practice Qn2   game
 let gameNum = 25;
 let userGuesNum = prompt("Guess the game number : ");

while (userGuesNum != gameNum) { // game
    userGuesNum = prompt("You entered wrong number, Guess again : ");
}
console.log("Congratulatios, you ertered the right number ");



// String in JS
let str1 = "Amit Kumar";
let str2 = 'Sumit Kumar';
console.log(str1.length);  // 10

let obj1 = {
    item : "pen",
    price : 10,
};

// template literals 
let output = `The cost of ${obj1.item} is ${obj1.price} rupees`;
console.log(output);


// upper/lower case
let uprCase = str1.toUpperCase();
let loweCase = str1.toLowerCase();
console.log(uprCase);
console.log(loweCase);

// trim  (remove spaces from start and end only)
let sentance = "    I like to  learn new      skills & technology        ";
console.log(sentance.trim());

let sliNum = "0123456";
console.log(sliNum.slice(1,6));


// Qs1 
let inpName = prompt("Enter your name : ");
let userName = "@" + inpName + inpName.length;
console.log(userName);
