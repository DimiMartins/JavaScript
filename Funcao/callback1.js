const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(function(a){// a = fabricante
    console.log(a) // a = é cada elemento do array fabricantes
})

console.log("Com função arrow")
fabricantes.forEach((a)=>console.log(a))// a = fabricante


// callback é passar uma função que essa função sera chamada quando o evento acontecer


