function salario(qtdeHrsTrabalhadas, qtdeRecebe){
    let resultado = qtdeHrsTrabalhadas * qtdeRecebe
    return `Salário igual a R$${22 * resultado.toFixed(2)}`
}

console.log(salario(8, 10))