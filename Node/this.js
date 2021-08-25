console.log(this === global)
console.log(this === module)


console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('dentro da função')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)

    this.perigo = '....' // coloca isso dentro do escopo global
}
this.perigo = '... '// coloca e retorna dentro do module.exports
logThis()