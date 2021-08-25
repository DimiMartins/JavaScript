const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react)//forma errada de passar
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])
//no foreach se passa primeiro o valor e depois a chave
chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))//has = diz se um elemento ou função esta ou não contido nesse metodo dentro do map
chavesVariadas.delete(123)// excluir elementos do map
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)//retorna a quantidade de elementos presentes no map

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')//foi substituido pois não pode ter valores duplicados
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)
