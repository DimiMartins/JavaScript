//let e const

{
    var a = 2
    let b = 3
    console.log(b)//let tem escopo de bloco
}
console.log(a)

// templete String
    const produto  = "ipad"
    console.log(`${produto} é caro`)


//operador destructuring tirar alguma coisa de dentro de uma string array objeto ...
    const [l,e,...tras] = 'coder'
    console.log(l,e,tras)

//ignorando o numero 2  
    const[x, ,y] = [1,2,3]
    console.log(x,y)
//tirando de dentro de um objeto
const {idade: i, nome} = {nome: 'Ana', idade: 9}
console.log(i,nome)
//para tirar algo de um array usando o destructuring usa-se []
//para tirar algo de dentor de um objeto usa-se {} 