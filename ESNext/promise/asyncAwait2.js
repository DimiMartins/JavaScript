const esperarPor = tempo => {
    return new Promise((res,rej) => {
        //quero reoslver a promessa depois de ter passado o tempo que recebi no parametro
        setTimeout(() => {
            res(`Ja se passou ${tempo} segundos`)
        }, tempo * 1000);
    })
}
esperarPor(1)
.then(()=> console.log("executando promise 1"))
esperarPor(1)
.then(()=> console.log("executando promise 1"))
esperarPor(1)
    .then(()=> console.log("executando promise 1"))
//async await ter um codigo que parece sincrono embora ele seja assincrono

const retornarValor = ()=> {
    return new Promise(resolve => {
        setTimeout(()=> resolve(10), 5000)
    })
}
const retornarValor = ()=> {
    return 20
}

//so posso colocar o AWAIT dentro de uma função SYNC

async function executar() {
    let valor = await retornarValor(0)
    
    //ssempre que tenho uma função que retorna uma promise posso usar ela com o await
    await esperarPor(2)//executa essa linha, so vai para proxima quando ele terminar
    console.log(`async await ${valor}`)
    await esperarPor(2)
    console.log(`async awiat ${valor + 1}`)
    return valor + 3
}

async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}

executar().then(console.log)