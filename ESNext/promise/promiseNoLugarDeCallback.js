//COM PROMISE
const http = require('http')

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
//Promise.all = posso passar varias promises para ela
//aqui ele espera todas as promises serem resolvidas ou rejeitadas e depois chamar o then
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
.then(turmas => [].concat(...turmas))//vou ter um unico array com todos os alunos de todas as turmas
.then(alunos => alunos.map(aluno => aluno.nome))
.then(x => console.log(x))    
//quando se passa uma letra que não tem 
getTurma('D').catch(e => console.log(e.message))


