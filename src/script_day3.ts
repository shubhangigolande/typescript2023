// // program 1

// let namesN:string [] = ["ram","satish","ramesh","suresh","laxman"] 
// console.log(namesN)

//============================================================

// // program 2
// let info2 :[number,string,string];
// info2 = [8766838624,"ANSH","GOLANDE"]

//============================================================

// // program 3

enum Roles{
    admin,
    customer,
    student,
    manager
}
if(Roles.admin){
    console.log('i work as admin')
}
if(Roles.customer){
    console.log('i work as customer')
}
if(Roles.student){
    console.log('i work as student')
}
if(Roles.manager){
    console.log('i work as manager')
}

//============================================================
//program4
enum Directions{
    North,
    South,
    East,
    West
}
if(Directions.North){
    console.log('kashmir is north directions')

}
if(Directions.South){
    console.log('kerala is south directions')
    
}
if(Directions.East){
    console.log('kolkata is east directions')
    
}
if(Directions.West){
    console.log('mumbai is west directions')
    
}

//============================================================

//program 5
enum StatusCode{
    NotFound=404,
    success=200,
    Created=201,
    TimeOut=503
}
if(StatusCode.NotFound){
    console.log('msg deleted')
}
if(StatusCode.success){
    console.log('msg success ok')
}
if(StatusCode.Created){
    console.log('msg add /created ')
}
if(StatusCode.TimeOut){
    console.log('msg timeout error')
}

//============================================================
//program 6
type Person={
    firstName:string,
    lastName:string
}
let shivansh:Person

shivansh={
firstName:'shiv',
lastName:'golande'
}
console.log(shivansh)

//============================================================

//program 7

// let rupali:{firstName:string,lastName:string}={
//     firstName:'rupali',
//     lastName:'deshmukh'
// }
// console.log(rupali.firstName)

//============================================================

// // program 8

// type Car={
//     modelnum:number,
//     color:string,
//     type:string
// }
// let audi:Car = {
//     modelnum:123,
//     color:'red',
//     type:'SUV'
// }
// console.log(audi)

//============================================================

// // program 9

interface PersonB{
    firstName:string,
    lastName:string
}
let PersonOne:PersonB={
    firstName:"Yogesh",
    lastName:"Bhosale"

}
console.log(PersonOne.firstName,PersonOne.lastName)


//============================================================

// // program 10

function printaddress(code:string|number){
    console.log(`my address is${code}`)

}
printaddress('binary code value 0.456874')
printaddress(35)
// function printAddress(code:string|number){
//     console.log(`My address is ${code}`)
// }
// printAddress('12')
// printAddress(12)


function greeet(code:string|number){
    console.log(`grade${code}`)
}
greeet('distinction')
greeet(75)
//============================================================

// // program 11

let account:'saving'|'current'
 account='saving'
// account:'current'
console.log(account)

// let account:"saving"|"current"
// account = "saving"
// account = "current"

// //let x = 10
// //const x = 10


