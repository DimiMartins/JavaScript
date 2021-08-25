// cadeia de protótipos (prototype chain)
// por padrão é object.prototype

Object.prototype.attr0 = '0' // evitar fazer isso, atribuir um valor

const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: "B", attr3: "3"}
const filho = {__proto__: pai, attr3: "C"}

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}KM/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: "f40",
    velMax: 324 //shadowing ==> sombreamento
}

const volvo = {
    modelo: "V40",
    status(){
        return `${this.modelo}: ${super.status()}`//sobrescrevendo um metodo
    }//shadowing ==> sombreamento
}
                                      // ferrari tem como prototipo carro
Object.setPrototypeOf(ferrari, carro)// setando carro como classe pai de ferrari
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(120)
console.log(volvo.status())

ferrari.acelerarMais(20)
console.log(ferrari.status())


