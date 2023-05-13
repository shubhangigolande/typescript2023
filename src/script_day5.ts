// class PersonA{
//     msg:string
//     constructor(ms:string){
//         this.msg=ms
//     }
//     dispaly(){
//         console.log(this.msg)
//     }
// }
// let a=new PersonA("hello")
// console.log(a)
// a.dispaly()


// class PersonB{
//     private msg:string
//     constructor(ms:string){
//         this.msg=ms
//     }
//     public dispaly(){
//         console.log(this.msg)
//         return this.msg
//     }
// }
// let b=new PersonB("hello")
// console.log(b)
// let c=b.dispaly()
// console.log(c)


class Personk{
    private msg:string
    constructor(ms:string){
        this.msg=ms
    }
    private dispaly(){
        console.log('greet')
        return this.msg
    }
    public displayOne(){
        console.log(this.dispaly())
    }
}
let m=new Personk("hello")
console.log(m)
m.displayOne()


// let g=m.displayOne()
// console.log(g)
