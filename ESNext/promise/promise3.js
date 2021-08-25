const gerarNumeroEntre = (min, max, tempo) =>{
    if (min > max) {
        [min,max] = [max,min]
    }
    return new Promise((res,rej)=>{
        //só vai gerar um numero depois do tempo passar
        setTimeout(() => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random()* fator) + min
        res(aleatorio)  
        }, tempo);
    })
}
//gerar 10 numero aleatorios

function gerarVariosNumeros() {
    return Promise.all([
        //ele vai executar todas as 6 chamadas em paralelo
        gerarNumeroEntre(1,60,4000),
        gerarNumeroEntre(1,60,1000),
        gerarNumeroEntre(1,60,500),
        gerarNumeroEntre(1,60,3000),
        gerarNumeroEntre(1,60,100),
        gerarNumeroEntre(1,60,1500),
    ])
}
console.time("Tempo de todas as chamadas")//o parametro desse metodo é um label (texto)
//so vai chamar o then depois de todas as promessas forem cumpridas
//no caso depois de todos os numeros forem gerados
gerarVariosNumeros().then(numeros => console.log(numeros))
.then(() => console.timeEnd("Tempo de todas as chamadas"))