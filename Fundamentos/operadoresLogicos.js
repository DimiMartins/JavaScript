function compras (trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2 // || = ou
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // operador ou exclusivo bitwise
    const comprarTV32 = trabalho1 != trabalho2 // o OU EXCLUSIVO  os parametros tem que ser diferentes (true false)
    const manterSaudavel = !comprarSorvete

    return {comprarSorvete, comprarTV32, comprarTv50, manterSaudavel}

}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))