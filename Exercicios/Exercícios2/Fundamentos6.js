//rever
function inverso(a) {
    const tipo = typeof a

    if ( tipo == "boolean") {
        return !a
    }else if (tipo == "number") {
        return -a
    }else{
        return `Boleano ou numero esperados, mas o parâmetro é do tipo ${tipo}`
    }
}

console.log(inverso(true))