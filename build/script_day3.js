"use strict";
// // program 1
// let namesN:string [] = ["ram","satish","ramesh","suresh","laxman"] 
// console.log(namesN)
//============================================================
// // program 2
// let info2 :[number,string,string];
// info2 = [8766838624,"ANSH","GOLANDE"]
//============================================================
// // program 3
var Roles;
(function (Roles) {
    Roles[Roles["admin"] = 0] = "admin";
    Roles[Roles["customer"] = 1] = "customer";
    Roles[Roles["student"] = 2] = "student";
    Roles[Roles["manager"] = 3] = "manager";
})(Roles || (Roles = {}));
if (Roles.admin) {
    console.log('i work as admin');
}
if (Roles.customer) {
    console.log('i work as customer');
}
if (Roles.student) {
    console.log('i work as student');
}
if (Roles.manager) {
    console.log('i work as manager');
}
//============================================================
//program4
var Directions;
(function (Directions) {
    Directions[Directions["North"] = 0] = "North";
    Directions[Directions["South"] = 1] = "South";
    Directions[Directions["East"] = 2] = "East";
    Directions[Directions["West"] = 3] = "West";
})(Directions || (Directions = {}));
if (Directions.North) {
    console.log('kashmir is north directions');
}
if (Directions.South) {
    console.log('kerala is south directions');
}
if (Directions.East) {
    console.log('kolkata is east directions');
}
if (Directions.West) {
    console.log('mumbai is west directions');
}
//============================================================
//program 5
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["success"] = 200] = "success";
    StatusCode[StatusCode["Created"] = 201] = "Created";
    StatusCode[StatusCode["TimeOut"] = 503] = "TimeOut";
})(StatusCode || (StatusCode = {}));
if (StatusCode.NotFound) {
    console.log('msg deleted');
}
if (StatusCode.success) {
    console.log('msg success ok');
}
if (StatusCode.Created) {
    console.log('msg add /created ');
}
if (StatusCode.TimeOut) {
    console.log('msg timeout error');
}
let shivansh;
shivansh = {
    firstName: 'shiv',
    lastName: 'golande'
};
console.log(shivansh);
let PersonOne = {
    firstName: "Yogesh",
    lastName: "Bhosale"
};
console.log(PersonOne.firstName, PersonOne.lastName);
//============================================================
// // program 10
function printaddress(code) {
    console.log(`my address is${code}`);
}
printaddress('binary code value 0.456874');
printaddress(35);
// function printAddress(code:string|number){
//     console.log(`My address is ${code}`)
// }
// printAddress('12')
// printAddress(12)
function greeet(code) {
    console.log(`grade${code}`);
}
greeet('distinction');
greeet(75);
//============================================================
// // program 11
let account;
account = 'saving';
// account:'current'
console.log(account);
// let account:"saving"|"current"
// account = "saving"
// account = "current"
// //let x = 10
// //const x = 10
