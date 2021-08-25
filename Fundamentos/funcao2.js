// armazenando uma função em uma variavel ou constante
const imprimirSoma = function(a= 0,b = 0){
    console.log(a + b)
}

imprimirSoma(2,3)

//Armazenando uma função arrow em uma variavel

const soma = (a, b) => {
    return a + b
}


console.log(soma(2 , 3))

// retorno implicito do arrow
const subtracao = (a , b) => a - b
console.log(subtracao(2,3))

// tendo um parametro só

const imprimir2 = a => console.log(a)
imprimir2("Legal!!!")