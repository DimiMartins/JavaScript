const nome = "rebeca"
const concatenacao = "ola" + nome + "!"
console.log(concatenacao)
// usando o templete String
const templete = `
    Olá
    ${nome}!`
console.log(templete)

//espressoes
console.log(`1 + 1 =  ${1+1}`)

const up = texto  => texto.toUpperCase()
console.log(`Ei.. ${up("cuidado")}!`)