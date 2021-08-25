const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
    
const chineses = f => f.pais == "China"
const mulheres = f => f.genero == "F"
const menorSalario = (func, novoFunc) => func.salario < novoFunc.salario ? func : novoFunc 
   
axios.get(url).then(response => {
    const funcionarios = response.data
    //mulher chinesa com menor salario
    const resultado = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)
    console.log(resultado)
})