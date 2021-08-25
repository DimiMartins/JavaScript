const prod1 = {
    nome: "...",
    preco: 45
}

const prod2 = {
    nome: "...",
    preco: 1234
}

// função factory
// sempre retorna um objeto
function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())

//função factory - retorna um objeto
