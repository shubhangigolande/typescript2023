"use strict";
//overloading
// same class , same method, different signature --- overloading
// class Addition {
//     //    addition(x:number,y:number):void{
//     //         console.log(x+y)
//     //     }
//     //     addition(x:number,y:number,z:number):void{
//     //         console.log(x+y+z)
//     //     }
//     static addition(x: any, y: any, z: any, a: any) {
//         if (x != undefined && y != undefined && z != undefined && a != undefined) {
//             console.log(x + y + z + a)
//         }
//         else if (x != undefined && y != undefined && z != undefined) {
//             console.log(x + y + z)
//         }
//         else if (x != undefined && y != undefined) {
//             console.log(x + y)
//         }
//     }
// }
// Addition.addition(12, 45, 89, 35)
// Addition.addition(45, 78, 3, undefined)
// Addition.addition(12, 35, undefined, undefined)
// // over riding ??
//different class ,same method, same ssignature ---- overriding
class WorldBank {
    loan(x) {
        return 10 + x;
    }
    save(y) {
        return 11 + y;
    }
}
class SI extends WorldBank {
    loan(x) {
        return 10 + x * 10;
    }
    save(y) {
        return 11 + y * 10;
    }
}
let nagpur = new SI();
console.log(nagpur.loan(3));
console.log(nagpur.save(5));
// abstaction class -----cannot create instance
// interface --- cannot create instance
class Stud {
    constructor() {
        this.displayCountry = () => console.log('India');
    }
}
class Teacher extends Stud {
    fullname() {
        return "shubhangi";
    }
}
let a = new Teacher();
a.displayCountry();
console.log(a.fullname());
