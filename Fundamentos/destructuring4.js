function rand ([min = 0, max = 1000]){
            // aq uso o destructuring
    if(min > max) [min , max] = [max,min] // aq eu criei o array
    // o if esta fazendo um tratamento para que se passar o valor min no lugar do valor max ele inverter
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50,40]))
console.log(rand([,993]))
console.log(rand([]))// padrão, vai ficar sorteando entre 0 e 1000