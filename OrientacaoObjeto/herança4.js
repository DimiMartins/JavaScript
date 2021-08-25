function MeuObjeto(){}
console.log(MeuObjeto.prototype) // retorna um objeto
const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

//quando criamos uma função a partir de uma função construtora o prototipo aponta para função.prototype
console.log(obj1.__proto__ === obj2.__proto__)// apontam para o mesmo objeto por padrão
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = "Anônimo"

MeuObjeto.prototype.falar= function(){
    console.log(`Bom dia! Meu nome é ${this.nome}!!`)
}

obj1.falar()
obj2.nome = "Rafael"
obj1.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype // mudei a referencia que por padrao é Object.prototype para MeuObjeto.prototype
obj3.nome = "obj3"
obj3.falar()

//resumo
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype) 
console.log(MeuObjeto.__proto__ === Function.prototype)// a função por padrão aponta para function.prototype
console.log(Function.prototype.__proto__ === Object.prototype) 
console.log(Object.prototype.__proto__ === null)




