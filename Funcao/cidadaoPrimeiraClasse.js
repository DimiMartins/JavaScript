// first class object
// Higther -order function - funcao de alta ordem
// função  no js pode ser dado


// criar de forma literal

function fun1(){
    // por padrao retorna o undefined
}

// armazenar função em uma variavel

const fun2 = function (){
       
}

// armazenar dentro de um array

const array = [function(a , b){return a + b}]
console.log(array[0](2,3))

// armazenar em um atribuoto de objeto

const obj = {}
obj.falar = function (){ return "Opa"}
console.log(obj.falar())

//passar função como parametro

function run(fun){
    fun()
}
run(function () {console.log("Executando")})


// uma função pode retornar ou conter uma função

function soma(a,b){
    return function(c){
        console.log(a + b + c)
    }
}

soma(2,3)(4) // chamar diretamente 
//ou
const cincoMais = soma(2,3)
cincoMais(4)