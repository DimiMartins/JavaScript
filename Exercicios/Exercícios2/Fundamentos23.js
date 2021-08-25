//rever
function valorRepetido(c, frase) {
    let contador = 0

    for (let i = 0; i < frase.length; i++) {
        if (frase.charAt(i) === c ) {
            contador++
        }
    }
    return contador
}

console.log(valorRepetido("f", "A faca do fedro é afiada"))