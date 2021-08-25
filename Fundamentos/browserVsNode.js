// entender os runtimes(beck and ou frontEnd(navegador)) para programar melhor em js
// sempre fugir do escopo global
let a = 3
global.b = 123
this.c = 456
this.d = false
this.e = 'teste'

console.log(this.a)// undefined
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

abc = 3 // vairavel maluca: sem var e let// não façã isso em casa
console.log(global.abc)// coloocando um objeto global no node

// dentro do node cada arquivo é um modulo