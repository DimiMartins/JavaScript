const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

// dirname , depois nome do arquivo qu eu quero gerar, depois o conteudo que eu quero que permaneça no arquivo, depois a callback 
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err =>{
    console.log(err || 'ARQUIVO SALVO!') // caso o resultado seja nulo ele vai imprimir ARQUIVO SALVO
})