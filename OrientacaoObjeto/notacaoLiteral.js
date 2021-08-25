const a = 1
const b = 2
const c = 3

//antes
const obj1 = {a: a, b:b, c:c}
//depois Atual
const obj2 = {a, b, c}

console.log(obj1, obj2)

const nomeAttr = "nota"
const valoraAttr = 7.87


const obj3 = {}
obj3[nomeAttr] = valoraAttr

console.log(obj3)

const obj4 = {[nomeAttr]: valoraAttr}
console.log(obj4)


const obj5 = {
    // forma antiga
    funcao1: function(){
        //...
    },

    //forma nova
    funcao2(){
        //...
    }
}

console.log(obj5)