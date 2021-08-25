//estrutura de conjunto, não indexada(sem indice), não aceita repetição

const { set } = require("lodash");

const times = new Set()
times.add('Vasco')
//posso encadear chamadas
times.add('São paulo').add("Palmeiras").add('Corinthians')
times.add('Vasco')//não aceita repetição

console.log(times)
console.log(times.size)//retorna o tamanho
console.log(times.has('Vasco'))//se contem um determinado valor
times.delete('Vasco')//deletar elemento

const nomes = ['Raquel', 'Lucas','Julia','Lucas']
const nomesSet = new Set(nomes)//passando um array como parametro
//o ultimo lucas foi ignorado pq o set NÃO ACEITA REPETIÇÃO
console.log(nomesSet)