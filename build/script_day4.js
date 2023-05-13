"use strict";
// program 1
// class personA{
//     name:string
//     constructor(nm:string){
//         this.name=nm
//     }
//     displaynm():string
//     {
//     return this.name
//     }
// }
// let amol=new personA('Amol golande')
// let ansh=amol.displaynm()
// console.log(amol,ansh)
//================================================================
// program 2
// class PersonB{
//     public name:string
//     constructor(nm:string){
//         this.name=nm
//     }
//     dispalyname():string{
//         return this.name
//     }
// }
// let shiva=new PersonB('shivansh golande')
// console.log(shiva.name)
// let nicknm=shiva.dispalyname()
//console.log(nicknm)
//================================================================
// program 3
// class PersonM{
//     private name:string
//     constructor(nm:string){
//         this.name=nm
//     }
//  public dispalynm():string{
//         this.greet()
//         return this.name
//     }
//      private greet(){
// console.log('hello i m learning js')
//     }
// }
// let sd=new PersonM('sapana')
// //console.log(sd.name)//  error bcz its private
// let r=sd.dispalynm()
// console.log(r)
// // sd.greet() error bcz private 
//================================================================
// program 4
class personS {
    constructor(name, lname) {
        // this.name
        // this.lname
        this.name = name;
        this.lname = lname;
    }
}
let pooja = new personS('pooja', 'pansare');
console.log(pooja.name, pooja.lname);
// class PersonE {
//     constructor(public name:string,public lname:string){}
// }
// let poorva  = new PersonE("poorva","vyas")
