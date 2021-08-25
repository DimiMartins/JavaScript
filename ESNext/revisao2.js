//Arrwo function
//sempre vai ser uma função anonima
const soma = (a,b) => a + b
console.log(soma(2,3))

//arrow function (this)
const lexico1 = () =>console.log(this === exports)
const lexico2 = lexico1.bind({})

lexico1()
lexico2()

//parametros default
function  log(texto = "Node") {
    console.log(texto)
}
log()
log("Arroz")

//operador spread espalhar
//operador rest agrupar**

function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(1,2,3,4,5,6,7,8,9))

