//funções middleware
// middleware pattern ( chain of responsability = padrão de responsabilidade)
// primeiro parametro é um objeto(contexto), o segundo é a função next
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}
const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}
// aqui não vai ser disparado a função next, por isso o next foi suprimido
const passo3 = ctx => ctx.valor3 = 'mid3'

//criamento de função para executar todos os meus middlewares
const exec = (ctx, ...middlewares) => {
    //outra função passando o indice ( que é um passo (função middleware acima))
    const execPasso = indice =>{
        middlewares && indice< middlewares.length && // se tiver criado um array de middlewares e o indice que passei for menor que o tamanho do array de middlewares 
            middlewares[indice](ctx, () => execPasso(indice + 1))// a função chama ela mesmo
    }
    execPasso(0)
}

const ctx = {} //criou um contexto
exec(ctx, passo1,passo2,passo3) //passando o contexto e os parametros para função exec
console.log(ctx)