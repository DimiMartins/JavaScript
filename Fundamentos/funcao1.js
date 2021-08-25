
// função recebe alguns dados faz determianda ação e retorna algo ou não
// função sem retorno em js

function imprimirSoma(a, b){// uma funçãodefine um bloco de codigo
    console.log(a + b)
}

imprimirSoma(2,3)
imprimirSoma(1)// erro not number
imprimirSoma(2,3,4,5,6,7)// ele vai somar os dois primeiros e o resto ele não vai fazer nada
imprimirSoma()

// função com retorno 
function soma(a,b = 0){// tratando o 2º parametro para se não for passado nada ser 0
    return a + b
}
//NaN = not a number
console.log(soma(2+3))
console.log(soma(2))