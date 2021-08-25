const [a] = [10]
console.log(a)

const[n1, , n3, , n5, n6 = 0]= [10, 7, 9, 8]
console.log(n1,n3,n5,n6)

// ignorei o primeiro elemento (primeiro array), va para o segundo elemento(sengundo array)
// ignore o primeiro elemento do segundo array e pegue o segundo
const[,[, nota]] = [[,8,8],[9,6,8]]
console.log(nota)
// destructuring de objeto usa chaves {} desestruturando de um objeto
// destructuring de de um array ele usa []