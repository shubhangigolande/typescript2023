"use strict";
// // program
let x = "hello";
console.log(x);
// // program 2
// let x1:number=8
// console.log((x1 as string).length) // '8'
// // program 3
// 876512454
// 653545978
let x2 = "helo";
console.log(x2.length);
// // program 4 (Generics)
function addi(x, y) {
    return [x, y];
}
let r1 = addi("shubhu", 8);
let r2 = addi("shiv", "ansh");
let r3 = addi(25, 21);
let r4 = addi(26, '26');
console.log(r1, r2, r3, r4);
