const http = require('http')
const { concat } = require('lodash')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`//pegando a url
    return new Promise((resolve,reject)=>{
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })//pegando todos os dados

            res.on('end', dados => {
                //se o try ocorrer corretamente
                try{
                    resolve(JSON.parse(resultado))
                }catch(e){//se ocorrer algum erro ele vem no reject
                    reject(e)
                }
            })
        })
    })
}

//recurso recente
//simplificar o uso de promise
//tem como objtivo simplificar seu codigo assincrono deixando ele muito mais sincrono
//await só vai funcionar se a função estiver marcada com async
let obterAlunos = async() => {
    const ta = await getTurma('A')//o resultado desse get turma vai ser atribuido ao ta
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta,tb,tc)// no final tenho um array com todas as turmas juntas
}//quando se tem uma função acync retorna um objeto asyncFunction


obterAlunos().then(alunos => alunos.map(a => a.nome))
.then(nomes => console.log(nomes))