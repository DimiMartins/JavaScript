const fs = require('fs')

const caminho = __dirname + '/arquivo.json'
//sincrono
//ler de forma sincrona
// se for um arquivo pesado ele vai travar o invent loop
// o segundo parametro é o tipo de encoding(no caso utf-8)
const conteudo = fs.readFileSync(caminho,'utf-8' ) // ler um arquivo de forma sincrona
// o tipo de encoding da pra ver na parte inferior da tela no canto direito
console.log(conteudo)

//assincrono
//leitura assincrono - mais interessante 
//passa o caminho, o encoding, e uma callback (função) que quando tiver lido o arquivo ele chama fazer os tratamentos
fs.readFile(caminho, 'utf-8', (errm, conteudo) => {
    //const config = conteudo // retorna uma string, tem que converter
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)// só vai funcionar se isso for um objeto
})

// forma mais simples de ler um arquivo JSON 
// executa de forma assicrona
const config = require('./Arquivo.json')
console.log(config.db)

//leitura de uma pasta
//readdir = ler um diretorio
//__dirname = presente em todos os modulos do node representa o diretorio atual 
fs.readdir(__dirname, (err, arquivos)=>{
    console.log("conteudo da pasta")
    console.log(arquivos)
})//ler um diretorio