// exclusivando para number
Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function(nota){
if (nota.entre(9,10)) {
    console.log("Quadro de Honra")
}else if (nota.entre(7,8.9)) {
    console.log("Aprovado")
}else if (nota.entre(4,6.9)) {
    console.log("Recuperação")
}else{
    console.log("Nota invalida")
}

}


imprimirResultado("dg")