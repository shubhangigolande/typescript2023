"use strict";
// // An interface is declared by using the interface keyword.
// //  It provides total abstraction;
// //  means all the methods in an interface are declared with the empty body
// interface worldBank {
//     save(): number
//     loan(): number
// }
// class SBI implements worldBank {
//     save(): number {
//         console.log('I am save method form SBI')
//         return 10
//     }
//     loan(): number {
//         console.log('I m loan method form SBI')
//         return 20
//     }
//     branchNmame() {
//         console.log('Kharadi branch')
//     }
// }
// class PNB implements worldBank{
//     loan(): number {
//         console.log('I m loan method from PNB')
//         return 32
//     }
//     save(): number {
//         console.log('I m Save method froom PNB')
//         return 3
//     }
// }
// class BOI implements worldBank {
//     save(): number {
//         console.log('I m save method from BOI')
//         return 4
//     }
//     loan(): number {
//         console.log('I m loan method from BOI')
//         return 63
//     }
// }
// let sbi1=new SBI()
// console.log(sbi1.save())
// console.log(sbi1.loan())
// console.log(sbi1.branchNmame())
// let pnb1=new PNB()
// console.log(pnb1.loan())
// console.log(pnb1.save())
// let boi1=new BOI()
// console.log(boi1.loan())
// console.log(boi1.save())
// //program 2
// interface student{
//     displayFName():string
//     displayAge():number        
// }
// interface Teacher{
//     Salary():number
// }
// class Info implements student, Teacher{
//     displayFName(): string {
//         return 'Shubhangi Amol Golande'
//     }
//     displayAge(): number {
//     return 2
//     }
//  Salary(): number {
//      return 35000
//  }   
// }
// let list=new Info()
// console.log(list.Salary())
// console.log(list.displayAge())
// console.log(list.displayFName())
// // program 3
// interface Address{
//     displayAdd():string
// }
// class GrandFather {
//     firstName:string
//     lastName:string
//     constructor(fn:string,ln:string){
//         this.firstName=fn
//         this.lastName=ln
//     }
//     displayGF(){
//         console.log(this.firstName+this.lastName)
//     }
// }
// class Fathers extends GrandFather implements Address{
//     ffname:string
//     constructor(fn:string,ln:string,ffnm:string){
//         super(fn,ln)
//         this.ffname=ffnm
//     }
//     displayFN(){
//         console.log(this.ffname+this.lastName)
//     }
// displayAdd(): string {
//     return "sr.No 53/58,Sainath Nagar,Wadgaonsheri, Pune-14"
// }
// }
// let shubh=new Fathers('Rajendra','Bhosale','Rangrao')
// console.log(shubh.displayAdd())
// console.log(shubh.displayFN())
// console.log(shubh.displayGF())
// console.log(shubh.ffname)
// console.log(shubh.firstName)
// console.log(shubh.lastName)
