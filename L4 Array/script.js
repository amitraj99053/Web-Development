let heroes = ["ironman", "thor", "hulk", "shaktiman", "spiderman", "antman"];

// console.log(heroes);
// console.log(heroes[0]);

// for loop
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}
console.log(" ");

// for of
for (let hero of heroes) {
    console.log(hero);
}
console.log(" ");


let cities = ["delhi", "pune", "hyderabad", "gurgaon"];

for (let city of cities) {
    console.log(city.toUpperCase());
}
console.log(" ");

// Qn1 
let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;

for (let val of marks) {
    sum += val;
}

let avg = sum / marks.length;
console.log("Avg of marks : ", avg);
console.log(" ");


// Qn 2
let items = [250, 645, 300, 900, 50];

// let i = 0;
// for (let val of items) {
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log("Value after offer = ", items[i]);
//     i++;
// }
// console.log(" ");

for (let i = 0; i < items.length; i++) {
    let offer = items[i] / 10;
    items[i] -= offer;
}
console.log(items);