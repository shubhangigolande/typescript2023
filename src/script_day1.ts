let am:number=10
console.log(am)


function additionA(a:number,b:number){
    console.log(a+b)
}
additionA(20,5)

function additionB(a:number,b:number){
    if(typeof a=="number" && typeof b=="number"){
        console.log(a+b)
    }
    else{
        console.log("incorrect")
    }

}
additionB(30,45)


function substaction(a:number,b:number,result:boolean,msg:string){
    if(result=true){
        console.log("pass")
        console.log(a-b)
    }
    else{
        console.log('fail')
    }
}
substaction(75,35,true,'pass')
substaction(40,3,false,'fail')


function muul(a:number,b:number):void{
    console.log(a*b)

}
muul(16,5)


function multi(a:number,b:number):number{
    console.log(a*b)
    return a*b
}
let s1=multi(22,7)
console.log(s1)

function additionG(a:number,b:number):number{
console.log(a+b)
return a+b
}
let t=additionG(85,9)   
console.log(t)


//let info=['shubhangi','golande',12,23]
let infoo:number []=[10,11,12,13] // fixed number in array
console.log(infoo)


//arrayof fixed size

let info1:[string,string,number,number] = ['shubhangi','golande',45,33]





// / let mobileNumber:number = 7709192441
// // console.log(mobileNumber)


// // function addition(a,b){
// //     console.log(a+b)
// // }
// // addition('1','2')


// // function additionB(x,y){
// //     if(typeof x == "number" && typeof y == "number"){
// //         console.log(x+y)
// //     }
// //     else {
// //         console.log('incorrect input')
// //     }
// // }
// // additionB('12','6')
// // program 1

// function additionB(x:number,y:number){
//     console.log(x+y)
// }
// additionB(2,3)

// // program 2
// let s1 = 10
// s1 = 34
// console.log(s1)

// // program 3
// function subtraction(x:number,y:number,result:boolean,msg:string){
//     if(result){
//         console.log(msg)
//         console.log(x+y)
//     }
//     else {
//         console.log(msg)
//     }
// }
// subtraction(12,6,true,"pass")
// subtraction(12,6,false,"fail")

// // program 4
// function additionC(x:number, y:number):void{
//     console.log(x+y)
// }
// additionC(12,3)

// function additionD(x:number, y:number):number{
//     console.log(x+y)
//     return  x + y
// }
// let s2 = additionD(12,3)
// console.log(s2)

// // program 6
// function mul(x:number, y:number):number{
//     console.log(x+y)
//     return  x * y
// }
// let s3 = additionD(12,3)
// console.log(s3)


// //program 7
// //let info = ["chinmay","deshpande",12,14]
// let info:number [] = [11,22,33,44]
// console.log(info)


// // program 8
// // Array of fixed size
// let role:[number,string] = [13,"chinmay"]

