/* Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
maiúsculas de minúsculas.*/

function contemNaString(frase, valor) {
    let contem = 0
    frase.split(' ')
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === valor) {
            contem ++
        }
    }
    return contem
}

console.log(contemNaString('Arroz xom feijao','r'))