let funcionarOuNao = (valor, chanceDeErro)=>{
    return new Promise((resolve,reject)=>{
        if(Math.random()< chanceDeErro ){
            reject('Ocorreu um erro')
        }else{
            resolve(valor)
        }
    })
}

funcionarOuNao('Testando...', 0.1)//chance muito pequena de dar erro pois so tem 10% de chance
    .then(console.log)
    .catch(err => console.log(`Erro: ${err}`))

funcionarOuNao('testando', 0.9)
    .then(v => `Valor: ${v}`)
    .then(
        //posso colocar um tratamento dentro de um then
        v => v.consol.log(v),
        err => console.log(`Erro esp.: ${err}`) 
        )
    .then(() => console.log("Quase fim"))
    .catch(err => console.log(`Erro: ${err}`))
    //depois de um catch vs pode ter um then
    //porem se cair em um catch ele perde todas as informações do then de cima
    .then(() => console.log('Fim'))//nenhum valor dps do catch é obtido
    //geraralmente O CATCH VAI NO FINAL