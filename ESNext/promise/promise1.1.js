//promessa, algo que vc vai resolver no futuro
//uma promise é uma função 

//vou chamar a função passada quando eu quiser cumprir a promessa
let p1 = new Promise(cumprirPromessa =>{
    return cumprirPromessa(3)//só recebe um valor
})
//p vira objeto 
console.log(typeof p)
p1.then(n => console.log(n))

/* NOMES OFICIAIS */

/* UMA PROMESSA GERA APENAS UM VALOR  */
//CASO QUEIRA RETORNAR MAIS DE UM VALOR TEM QUE CRIAR UM OBJETO
//Pegando um objeto com mais de um valor
let p2 = new Promise((res,rej) => {
    res({
        x: 3,
        y: 4
    })
})
p2.then(n => console.log(n))
//pegando um array
let p3 = new Promise( (res, rej) => {
    res(['ana'] )
})
//pode passar uma função pronta tambem
let imprimir = n => console.log(n)
p3.then(imprimir)
//pode encadear funções usando o then