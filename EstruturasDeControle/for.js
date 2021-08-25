//usando o while com quantidade determinada

let contador = 1
while (contador <= 10) {
    console.log(`Contador = ${contador}`)
    contador++
}

for (let i = 0; i <= 10; i++) {
    console.log(`Usando for, i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
// o i no caso é o contador
for (let i = 0; i < notas.length; i++) { // length = tamanho do array
    console.log(`NOTAS = ${notas[i]}`)
}