// array no js e um OBJETO
// organizado a partir de indices 
// array é dinamico, heterogeneo
// tentar trabalhar sempre com dados heterogeneos

console.log(typeof Array)
console.log(typeof new Array)
console.log(typeof [])


let aprovados = new Array("Bia","Carlos",'Ana')
console.log(aprovados)

aprovados = ["bia", 'carlos', 'ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])// retorna undefined

aprovados[3] = 'paulo' // mais comum para substituir 
console.log(aprovados[3])
aprovados.push("ABia")// usados para adicionar
console.log(aprovados.length)

// adicionando um atributo fora de uma sequencia normal 
// o que tiver no meio do array vazio retorna undefined 
aprovados[9] = "rafael"

console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados)
aprovados.sort()// ordena o array
console.log(aprovados)

delete aprovados[1] // excluir um indice do array
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ["Bia", "Carlos","Ana"]
// primeiro parametro é o indice, depois a quantidade que quer excluir a partir daquele indice
aprovados.splice(1,1) // adiciona e exclui ao mesmo tempo
console.log(aprovados)
aprovados.splice(1,0,'Roberto', "Ricardo", "jose")
console.log(aprovados)






