// agrupa m,ultiplos valores de forma linear
// indexada, heterogeneo (pode colocar qualque coisa), não tem tamanho fixo
const valores = [7.7, 8.9, 6.4, 9.7]
console.log(valores[0], valores[3])

valores[4] = 10
console.log(valores)
console.log(valores.length)// quantos elementos tem no array
            //object            aceita qualquer tipo 
valores.push({id: 3}, false, null, 'teste')// push = adiciona valores
console.log(valores)
// não é ideal misturar os dados
// sempre prezar pelos arrays homogeneos (de um tipo só)
console.log(valores.pop)// pega o ultimo valor do array e tira ele retornando ele no console
delete valores[0] // retira um atributo dentro de um objeto
console.log(valores)

console.log(typeof valores)// tipo object

