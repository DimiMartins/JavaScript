function bissexto(ano) {
    if (ano % 4 == 0|| ano % 400 == 0) {
        return `O ano passado (${ano}) é bissexto`
    }else if (ano % 100 == 0) {
        return `O ano passado (${ano}) não é bissexto`
    }else{
        return `O ano passado (${ano}) não é bissexto`
    }
}

console.log(bissexto(2024))