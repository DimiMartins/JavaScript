//rever
function escola(nota) {
    nota = notaCorrigida(nota)
    if (nota >=40 && nota <=100) {
        return `Aprovado com nota de ${nota}`
    }else {
        return `Reprovado com nota de ${nota}`
    }
}

function notaCorrigida(nota) {
    if (nota % 5 > 2) {
        return nota + 5 -(nota % 5)
    }
}

console.log(escola(38))