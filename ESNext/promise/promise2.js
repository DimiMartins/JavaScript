//executa o conteudo da função depois de um tempo
//muito mais complicado de fazeer varias chamadas
setTimeout(() => {
    console.log('Executando callback1')
    setTimeout(() => {
        console.log('Executando callback2')
        setTimeout(() => {
            console.log('Executando callback3')
        }, 2000);
    }, 2000);
}, 2000);


let esperarPor = tempo => {
    return new Promise((res,rej) => {
        //quero reoslver a promessa depois de ter passado o tempo que recebi no parametro
        setTimeout(() => {
            res(`Ja se passou ${tempo} segundos`)
        }, tempo * 1000);
    })
}

esperarPor(2).then(n => console.log(n))