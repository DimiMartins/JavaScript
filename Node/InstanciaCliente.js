// tanto a A como B compartilham do mesmo objeto retornado
const contadorA = require('./InstanciaUnica')
const contadorB = require('./InstanciaUnica')

// retorna uma função factory
// ambos nesse caso são independentes
const contadorC = require("./InstanciaNova")()
const contadorD = require("./InstanciaNova")()


//ambos compartilham do mesmo objeto, uma unica instancia
contadorA.inc()
contadorA.inc()
console.log(contadorC.valor)
console.log(contadorB.valor)

//aqui o contador D não é alterado pois são objetos diferentes
contadorC.inc()
contadorC.inc()
console.log(contadorC.valor)
console.log(contadorD.valor)

