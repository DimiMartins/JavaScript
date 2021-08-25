const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"]
//jeito 1
aprovados.forEach((nome, i)=>{
    console.log(`${i + 1} ==> ${nome}`)
})
//jeito 2    // sempre recebe o nome e o indice
aprovados.forEach(function (nome, i) {
    console.log(`${i + 1} ==> ${nome}`)
    
})

aprovados.forEach(nome=> console.log(nome))

const exibirAprovado = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovado)


console.log("__________________________________________")
// o FOREACH pode tambem receber um array
aprovados.forEach((nome, i, array)=>{ // recebe no máximo 3 parametros, dps disso qualque outro paramentro retorna undefined
    console.log(`${i + 1} ==> ${nome}`)
    console.log(array)
})
