const gerarNumeroEntre = (min, max, numerosProibidos) =>{
    if (min > max) [max,min] = [min,max]
    return new Promise((resolve,reject)=>{
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random()* fator) + min
        if (numerosProibidos.includes(aleatorio)) {
            reject('Número repetido')
        }else{
            resolve(aleatorio)
        }
    })
}

async function gerarMegacena(qtdeNumeros, tentativas = 1) {
    try {
        const numeros = []
    for(let _ of Array(qtdeNumeros).fill()){
        //AWAIT SEMPRE FICA JUNTO DA FUNÇÃO QUE RETORNA UMA PROMISE, NO CASO A GERAR NÚMEROS
        numeros.push(await gerarNumeroEntre(1, 60, numeros))
    }
    return numeros
    } catch (error) {
        if (tentativas > 10) {
            throw "não deu certo"
        }else{
            gerarMegacena(qtdeNumeros,tentativas + 1)
        }
    }
}

gerarMegacena(8)
    .then(console.log)
    .catch(console.log)

/* //vou querer gerar os numeros da mega sena
gerarNumeroEntre(1,5, [1,2,4])//gerar numero entre 1 e 5, so vai conseguir gerar o 3 e o 5
    .then(console.log)
    .catch(console.log) */