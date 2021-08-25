function sacarDinheiro(valor) {
    let contador100 = 0
    let contador50 = 0
    let contador20 = 0
    let contador10 = 0
    let contador5 = 0
    let contador1 = 0


    let valorDaNota = calcularValorDaNota(valor)
    while (valor >= valorDaNota) {
        switch (valorDaNota) {
            case 100:
                valor -= 100
                contador100++
                break;
            case 50:
                valor -= 50
                contador50++
                break;
            case 20:
                valor -= 20
                contador20++
                break; 
            case 10:
                valor -= 10
                contador10++
                break;   
            case 5:
                valor -= 5
                contador5++
                break;
            case 1:
                valor -= 1
                contador1++
                break;
        }
        valorDaNota = calcularValorDaNota(valor)
    }

    return elaborarResultado(contador100,contador50,contador20,contador10,contador5,contador1)
}


function calcularValorDaNota(valor) {
    if (valor >= 100) {
        return 100
    }else if (valor >= 50) {
        return 50
    }else if (valor >= 20) {
        return 20
    }else if (valor >= 10) {
        return 10
    }else if (valor >= 5){
        return 5
    }else if (valor >= 1) {
        return 1
    }
}

function elaborarResultado(contador100,contador50,contador20,contador10,contador5,contador1) {
    let resultado = ""
    if (contador100 > 0) {
        resultado += `${contador100} nota(s) de cem\n`
    }
    if (contador50 > 0) {
        resultado += `${contador50} nota(s) de cinquenta\n`
    }
    if (contador20 > 0) {
        resultado += `${contador20} nota(s) de vinte\n`
    }
    if (contador10 > 0) {
        resultado += `${contador10} nota(s) de dez\n`
    }
    if (contador5 > 0) {
        resultado += `${contador5} nota(s) de cinco\n`
    }
    if (contador1 > 0) {
        resultado += `${contador1} nota(s) de um\n`
    }

    return resultado
}

console.log(sacarDinheiro(188))