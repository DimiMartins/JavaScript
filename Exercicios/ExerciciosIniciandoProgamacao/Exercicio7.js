/* Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
"entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
considerando se numero é igual a minimo ou a maximo.*/

function numeroEntre(n, max, min, inclusivo) {
    
    if (min > max) {
        [min,max] = [max,min]
    }
    
    if (inclusivo === true) {
        if (n >= min && n <= max) {
            return `O número [${n}] ESTÁ entre o máximo e o mínimo [${min}, ${max}]`
        }else{
            return `O número [${n}] NÃO está entre o máximo e o mínimo [${min},${max}]`
        }
    }else{
        if (n > min && n < max) {
            return `O número [${n}] ESTÁ entre o máximo e o mínimo [${min},${max}]`
        }else{
            return `O número [${n}] NÃO está entre o máximo e o mínimo [${min},${max}]`
        }
    }
}

console.log(numeroEntre(8,5,10,true))