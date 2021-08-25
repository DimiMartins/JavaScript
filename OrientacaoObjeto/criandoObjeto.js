// usando a notação literal

const obj1 = {} 
console.log(obj1)

//Object em js  
console.log(typeof Object, typeof new Object)
const obj2 = new Object // função construtora
console.log(obj2)


// criar funções ocnstrutoras

function Produto(nome, preco, desconto){
    this.nome = nome // posso alterar fora do objeto por conta da utilização do this
    this.getprecoComDesconto = () => {
        return preco * (1 - desconto) // preco e desconto só estarão visíveis dentro dessa função
    }
}

const p1 = new Produto("Caneta", 7.99, 0.15)
const p2 = new Produto("Notebook", 2998.99, 0.25)

console.log(p1.getprecoComDesconto(), p2.getprecoComDesconto())

//função factory

function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,

        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario("Joao", 7980, 4)
const f2 = criarFuncionario("Maria", 11400, 1)

console.log(f1.getSalario(), f2.getSalario())


// criar objeto com Object.create

const filha = Object.create(null)
filha.nome = "ana"

console.log(filha)

//Uma função famosa que retorna um objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)
