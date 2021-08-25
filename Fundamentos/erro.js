function tratarErroELancar(erro){
    //throw new Error("...")// pode também lançar valores numericos, booleanos, String e objeto
    throw {
        nome: erro.nome,
        msg: erro.message,
        date: new Date
    }

}


function imprimirNOmeGritando(obj){
    try{
        console.log(obj.name.toUpperCase() + "?")
        
    }catch(e){
        tratarErroELancar(e)
    }finally{// sempre é chamado não importa se der erro ou não
        console.log("final")
    }
}

const obj = {nome: 'Roberto'}
imprimirNOmeGritando(obj)