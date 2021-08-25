
//string é uma cadeia de caracteres

const escola = "cod3r"
console.log(escola.charAt(4)) // divide a paavra em indices e pega a letra de determinado indice
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) // valor dentro da tabela unicode
console.log(escola.indexOf("3")) // se existe um valor dentro da palavra

console.log(escola.substring(1))// imprimi a palavra tirando o primeiro indice (primeira letra)
console.log(escola.substring(0,3))// tira as letras cujo os indices são 0 a 3 sem incluir o 3

console.log("Escola ".concat(escola).concat("!")) // concatenar, pode ser trocado o concat por +
console.log(escola.replace(/\d/,"e"))// substituir todos os digitos pela letra e
console.log(escola.replace(/\d/g,"e"))// substitui todas as letras e digitos por e
console.log("Ana, Maria, Pedro".split(",")) // separa por virgula e gera um array
