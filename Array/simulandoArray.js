const quaseArray = {0: "rafael",1: "ana", 2: "bia"}
console.log(quaseArray)


Object.defineProperty(quaseArray, 'toString',{
    value: function(params) {return Object.values(this)},
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ["Rafael","Ana","Bia"]
console.log(quaseArray.toString(), meuArray)