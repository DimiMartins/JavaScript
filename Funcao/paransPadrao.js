// estrategia 1 para gerar valor padrao

function soma1 (a, b ,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1())
console.log(soma1(3))

// estrategia 2, 3 ,4
function soma2 (a,b,c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c // a mais segura
    return a + b + c
}

console.log(soma2())
console.log(soma2(3))
console.log(soma(0,0,0))


//usando o valor padrão do es2015
// a melhor para se usar 
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3)