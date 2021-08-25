{{{{{{var sera = "será?"
    console.log(sera)
}}}}}}

console.log(sera)

function teste(){
    var local = 123 // definindo uma variavel dentro de uma function o escopo dela e somente dentro da função
    console.log(local)
}
teste()
console.log(local)
// var - ou o escopo dele é nível global ou dentro de uma função (visivel somente dentro de uma função)
