//rever
function calcularValor(mes,valor ) {
    if (mes >=0 && mes <=12) {
        atraso = mes - 1
        return (valor * ((1 + (5/100))**atraso)).toFixed(2)
    }else {
        return "Mês inválido"
    }
}

console.log(calcularValor(5,1200))