function Carro(velocidadeMaxima = 200, delta = 5){
    // atributo privado = pertece ao escopo dessa função
    let velocidadeAtual = 0

    //metodo publico

    this.acelerar = function(){
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        }else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //  outro metodo publico

    this.getVelocidadeAtual = function (){ // this deixa visivel fora 
        return velocidadeAtual
    }

}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350 , 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())


console.log(typeof Carro)
console.log(typeof ferrari)