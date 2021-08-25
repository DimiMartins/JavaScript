//controlar o parse de uma tmplete strig por uma função

function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor,i)=>{
        //caso n seja um valor numerico vou retornar somente o valor
        valor = isNaN(valor) ? valor: `R$${valor.toFixed(2)}`
        resultado.push(partes[i], valor)
    })
    return resultado.join('')//pega todos os elementos de resultado e junta a stirng no final
}

const preco = 29.99
const precoDaParcela = 11

console.log(real `1x de ${preco} ou 3x de ${precoDaParcela}.`)
