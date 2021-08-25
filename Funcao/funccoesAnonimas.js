//função anonima é uma função sem nome
const soma = function(x,y){
    return x + y
}

const imprimirResultado = function(a, b , operacao = soma){
    console.log(operacao(a,b))
}

imprimirResultado(3,4)
imprimirResultado(3,4,soma)
imprimirResultado(3,4, function (x,y){// passando uma função anonima para uma outra função
    return x - y
})
//arrow funtion
imprimirResultado(3,4,(x,y) => x * y) // função anonima

// acessando uma função anonima através de um atributo de um objeto

const pessoa= {
    falar: function(){ // função anonima
        console.log("Opa")
    },
    falar2(){
        console.log("opa2")
    }
}
pessoa.falar()
pessoa.falar2()
