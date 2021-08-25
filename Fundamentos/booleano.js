let isAtivo = false
console.log(isAtivo)
// sempre priorizar constantes ao inves de variaveis(sempre que possivel)
isAtivo = true
console.log(isAtivo)

isAtivo = 1 // 1 se comporta nesse caso como verdadeiro
console.log(!!isAtivo) // ! = não verdadeiro, not 

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!! ( isAtivo = false))

console.log("pra finalizar")
console.log(''|| null || 0 || "epa" || 123) // sem as exclamações ele retorna o primeiro valor que ele encontrou
console.log(!!(""|| null || 0 || "epa" || "" || 123))

let nome = 'lucas'
console.log(nome || 'desconehcido')
