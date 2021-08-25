// criando objeto por classe
class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

// função factory que retorna um objeto
// melhor fazer essa pra não se preoucupar com o this
const p1 = new Pessoa("Joao")
p1.falar()

const CriarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    } 
}

const p2 = CriarPessoa("Joao")
p2.falar() 