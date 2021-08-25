//revisão de recursos novos que foram colocados na parte de objeto

//ES8: object.values/object.entries

const obj = {a:1, b:2, c:3}
console.log(Object.values(obj))//vai pegar so os valores do meu objeto
console.log(Object.entries(obj))//retorna um array em cima de cada chave valor

//molhorias na notação literal 
const nome = 'Carla'
const pessoa = {
    nome, 
    ola(){
        return 'Oi gente'
    }
}

console.log(pessoa.nome, pessoa.ola())

//classe= sempre vai ser convertida para função

class animal {}
class cachorro extends animal{
    falar(){
        return "Au Au!"
    }
}

console.log(new cachorro().falar())






