const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// sem callback
const notasBaixas1 = []

for (let i in notas) {
    if (notas[i] < 7)
    notasBaixas1.push(notas[i])
}

console.log(notasBaixas1)

// com callback

const notasBaixas2 = notas.filter(function (nota){
    return nota <= 7 // se for menor que 7 ele vai add em notas baixas
})

console.log(notasBaixas2)

const notasBaixas3 = notas.filter(n => n <=7 )
console.log(notasBaixas3)
// reusandos codigo
const notasMenorQue7 = nota => nota <= 7
const notasBaixas4 = notas.filter(notasMenorQue7 )
console.log(notasBaixas4)