/* Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.*/

function segundoMaiorValor(arrayNums) {
    const ordenarValores = arrayNums.sort((nA,nB) => nB - nA)
    return ordenarValores [1]
}

const array = [1,2,5,6,8,25,3,96,222,85]

console.log(segundoMaiorValor(array))

    