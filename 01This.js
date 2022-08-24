function InstanceCreator() {
    console.log(this)
    let n = 1
    this.sum = function () {
        console.log(this)
        console.log(++n)
    }
    this.fn = () => {
        console.log(this)
        console.log(++n)
    }
    return {
        sum,
        fn
    }
}

let a = InstanceCreator()
a.sum()
a.fn()
let b = new InstanceCreator()
b.sum()
b.fn()

/*const fn = () => {
    let a = 1
    console.log(this)
}*/

// let a = new InstanceCreator().sum()
// let d = new InstanceCreator().fn()
/*let b = InstanceCreator()
b.sum()
b.fn()*/
// let c = fn()

/*setTimeout(function () {
    console.log(this)
}, 0)

setTimeout(() => {
    console.log(this)
}, 0)*/
