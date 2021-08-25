//exemplo usando process
//se estiver presente dentro da lista de argumentos o -a ele vai voltar verdadeiro 
const anonimo = process.argv.indexOf('-a') !== -1
console.log(anonimo)

if (anonimo) {
    process.stdout.write('Fala anonimo \n')
    process.exit()//matar o processo
}else {// se caso a flag n esteja presente o usuario vai ter que digitar seu nome
    //stdout = saida padrão que é o console
    process.stdout.write('informe o seu nome: ')
    
    process.stdin.on('data', data => {//enter tbm vai ser enviado dentro de data
        const nome = data.toString().replace('/n','' ) //removendo o /n do final para tirar o enter
        process.stdin.write(`Fala ${nome}!!!\n`)
        process.exit()
    })
}