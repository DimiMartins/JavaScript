/* Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será
gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número
sorteado internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se
não for igual, retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado.*/
function sorteio(num) {
    let aleatorio = Math.random() * (10 - 0) + 0
    const numeroSorteado = Math.ceil(aleatorio)
    if (num >= 0 && num <=10 ) {
        if (num == aleatorio) {
            return `O número sorteado ${numeroSorteado} é igual ao número passado`
        }else{
            return `O número sorteado ${numeroSorteado} NÃO é igual ao número passado`

        }
    }
}
console.log(sorteio(5))