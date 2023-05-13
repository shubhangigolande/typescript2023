"use strict";
// An interface is declared by using the interface keyword.
//  It provides total abstraction;
//  means all the methods in an interface are declared with the empty body
class SBI {
    save() {
        console.log('I am save method form SBI');
        return 10;
    }
    loan() {
        console.log('I m loan method form SBI');
        return 20;
    }
    branchNmame() {
        console.log('Kharadi branch');
    }
}
class PNB {
    loan() {
        console.log('I m loan method from PNB');
        return 32;
    }
    save() {
        console.log('I m Save method froom PNB');
        return 3;
    }
}
class BOI {
    save() {
        console.log('I m save method from BOI');
        return 4;
    }
    loan() {
        console.log('I m loan method from BOI');
        return 63;
    }
}
let sbi1 = new SBI();
console.log(sbi1.save());
console.log(sbi1.loan());
console.log(sbi1.branchNmame());
let pnb1 = new PNB();
console.log(pnb1.loan());
console.log(pnb1.save());
let boi1 = new BOI();
console.log(boi1.loan());
console.log(boi1.save());
class Info {
    displayFName() {
        return 'Shubhangi Amol Golande';
    }
    displayAge() {
        return 2;
    }
    Salary() {
        return 35000;
    }
}
let list = new Info();
console.log(list.Salary());
console.log(list.displayAge());
console.log(list.displayFName());
class GrandFather {
    constructor(fn, ln) {
        this.firstName = fn;
        this.lastName = ln;
    }
    displayGF() {
        console.log(this.firstName + this.lastName);
    }
}
class Fathers extends GrandFather {
    constructor(fn, ln, ffnm) {
        super(fn, ln);
        this.ffname = ffnm;
    }
    displayFN() {
        console.log(this.ffname + this.lastName);
    }
    displayAdd() {
        return "sr.No 53/58,Sainath Nagar,Wadgaonsheri, Pune-14";
    }
}
let shubh = new Fathers('Rajendra', 'Bhosale', 'Rangrao');
console.log(shubh.displayAdd());
console.log(shubh.displayFN());
console.log(shubh.displayGF());
console.log(shubh.ffname);
console.log(shubh.firstName);
console.log(shubh.lastName);
