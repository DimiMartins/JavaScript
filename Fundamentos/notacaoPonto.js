// presença da notação ponto
console.log(Math.ceil(6.1))// arredondar


const obj1 = {}
obj1.nome = "bola"
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome // fica publico usando o this
    this.exec = function(){// this -> exposto para fora
        console.log('Exec')
    }
}


const obj2 = new Obj('Cadeira')
const obj3 = new Obj('mesa')
console.log(obj2)
console.log(obj3)
obj3.exec
