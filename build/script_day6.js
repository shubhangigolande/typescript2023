"use strict";
// //single inheritence
// //program 1
// class father{
//     firstName:string
//     lastName:string
//     constructor(fn:string,ln:string){
//         this.firstName=fn
//         this.lastName=ln
//     }
//     dispay(){
//         console.log(this.firstName+this.lastName)
//     }
// }
// class son extends father{
//     sname='Ansh'
// }
// let ansh=new son('Amol','Golande')
// console.log(ansh.firstName)
// console.log(ansh.lastName)
// console.log(ansh.sname)
// let shiv=new father('shivansh','golande')
// shiv.dispay()
// // program 2
// // single inheritance 
// class Father{
//     firstName:string
//     lastName:string
//     constructor(fn:string,ln:string){
//         this.firstName=fn
//         this.lastName=ln
//     }
//     display():void{
//         console.log(this.firstName+this.lastName)
//     }
// }
// class Son extends Father{
//     sName:string
//     constructor(fn:string,ln:string,sn:string){
//         super(fn,ln)
//         this.sName=sn
//     }
//     dispalySon():void{
//         console.log(this.sName+this.lastName)
//     }
// }
// let sn1=new Son('Amol','Golande','Ansh')
// console.log(sn1)
// sn1.dispalySon()
// sn1.display()
// // program 3
// class GrandFatherr{
//     firstName:string
//     lastName:string
//     constructor(fn:string,ln:string){
//         this.firstName=fn
//         this.lastName=ln
//     }
//     displayd():void{
//         console.log(this.firstName+this.lastName)
//     }
// }
// class Fatherr extends GrandFatherr{
//     fname:string
//     constructor(fn:string,ln:string,fnm:string){
//         super(fn,ln)
//         this.fname=fnm
//     }
//     dispalyFath():void{
//         console.log(this.fname+this.lastName)
//     }
// }
// class Sonn extends Fatherr{
//     Sname:string
//     constructor(fn:string,ln:string,fnm:string,sn:string){
//         super(fn,ln,fnm)
//         this.Sname=sn
//     }
//     displaySonn():void{
//         console.log(this.Sname+this.lastName)
//     }
// }
// let a1=new Sonn('Sukhadev','Golande','Popatrao','Amol')
// console.log(a1)
// a1.dispalyFath()
// a1.displaySonn()
// a1.displayd()
// program 4
class Fatherss {
    constructor(fn, ln) {
        this.firstName = fn;
        this.lastName = ln;
    }
    dispalyed() {
        console.log(this.firstName + this.lastName);
    }
}
class Sons extends Fatherss {
    constructor(fn, ln, snm) {
        super(fn, ln);
        this.sname = snm;
    }
    dispalysnm() {
        console.log(this.sname + this.lastName);
    }
}
class Daughter extends Fatherss {
    constructor(fn, ln, dn) {
        super(fn, ln);
        this.dname = dn;
    }
    dispalydnm() {
        console.log(this.dname + this.lastName);
    }
}
let shiv = new Sons('amol', 'golande', 'shiv');
console.log(shiv.dispalyed(), shiv.dispalysnm());
