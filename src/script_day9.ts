// // program

let x:unknown ="hello"
console.log((x as string))

// // program 2

// let x1:number=8
// console.log((x1 as string).length) // '8'

// // program 3

// 876512454
// 653545978

let x2:unknown = "helo"
console.log((<string>x2).length)


// // program 4 (Generics)

function addi<s1,s2>(x:s1,y:s2):[s1,s2]{
    return [x,y]
}
let r1=addi<string,number>("shubhu",8)
let r2=addi<string,string>("shiv","ansh")
let r3=addi<number,number>(25,21)
let r4=addi<number,string>(26,'26')
console.log(r1,r2,r3,r4)

   