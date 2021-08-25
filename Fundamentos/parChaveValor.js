// um objeto é um conjunto de chave valor

// par nome / valor

const saudacao = "opa" // contexto léxico 1 - é o local no qual a sua variavel foi definido no codigo

function exec(){
    const saudacao = "falaaa" // contexto lexico 2 - 
    return saudacao
}

// objetos são grupos aninhados de chave valor
// criando um objeto
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua muito legal',
        numero: 123

    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
