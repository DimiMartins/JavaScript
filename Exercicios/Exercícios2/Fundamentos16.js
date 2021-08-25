function bissexto(ano) {
    if (ano % 4 == 0) {
        return console.log(`O ano [${ano}] é bissexto`)
    }else{
        return console.log(`O ano [${ano} NÃO é bissexto`)
    }
}

bissexto(2020)