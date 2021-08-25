let dobro = function(a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}
// return implicito
dobro = a => 2 * a // se tiver so um parametro posso tirar os parenteses

console.log(dobro(2))

let ola = function (){
    return 'Olá'
}

ola = () => "Ola" // se vc colocar os blocos ({}) voce obrigatoriamente tem que colocar o return

console.log(ola())


