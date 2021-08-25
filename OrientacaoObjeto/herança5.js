// esses 3 tipos são funções
// e todos eles tem um atributo .prototype
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// reverter uma string 
String.prototype.reverse  = function(){// gerando um array da string com todas as letras com espaçoes em branoc tambem
    return this.split('').reverse().join('')
}

console.log("Arroz e ovo".reverse())

Array.prototype.first = function(){
    return this[0]
}

console.log([1,2,3,4,5].first())
console.log(["a","b","c"].first())
