let objeto = {
    nome: "Dimi",
    idade: 20,
    peso: 80
}

function ObjEmArray(objeto) {
    let chaves = Object.keys(objeto)
    const resultado= chaves.map(c => [c, objeto[c]])
    return resultado
}

console.log(ObjEmArray(objeto))