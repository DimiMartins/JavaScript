function soBoaNoticia(nota){
    if (nota >= 7) {
        console.log("Aprovado com : " + nota)
    }
}

soBoaNoticia(8.1)

function seForVerdade(valor) {
    if (valor) {
        console.log("É verdade..." + valor)
    }
}
//falso
seForVerdade()
seForVerdade(null)
seForVerdade(undefined)
seForVerdade(NaN)
seForVerdade("")
seForVerdade(0)
// verdadeiro
seForVerdade(-1)
seForVerdade("cuzoa")
seForVerdade("?")
seForVerdade([])
seForVerdade([1,2])
seForVerdade({})