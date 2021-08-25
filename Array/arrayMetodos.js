const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"]
pilotos.pop() //remove o ultimo elemento do array
console.log(pilotos)
pilotos.push("Verstappen")
console.log(pilotos)
pilotos.shift()// remove o primeiro elemento da lista
console.log(pilotos)
pilotos.unshift("Hamilton") // coloca um elemento no primeiro indice
console.log(pilotos)


//Splice pode adicionar ou remover 
// primeiro parametro é o indice, depois a quantidade que quer excluir a partir daquele indice ou adicionar
pilotos.splice(2,0, "Bottas", "Massa")//adionar
console.log(pilotos)

//remover
pilotos.splice(3,1)
console.log(pilotos)

const algunsPilotos = pilotos.slice(2)//gera um novo array, nesse caso a partir do indice 2
console.log(algunsPilotos)

// outro uso do slice
const algunsPilotos2 = pilotos.slice(1,4)// pegando do indice 1 ate o 4 não incluindo o indice 4
console.log(algunsPilotos2)