
//JSON - é um formato de dados, o mais usado por sistemas
//JSON - é possivle ser lido em varias linguagens


//criando um objeto
const obj = {a: 1, b: 2, c: 3, soma(){return a + b + c} }

//convertendo ele para JSON
console.log(JSON.stringify(obj)) // exclui a função pois JSoN é um formato de dados, não é algo executavel
//console.log(JSON.parse("{a:1, b:2, c:3}")) // da erro
//console.log(JSON.parse("{'a':1, 'b':2, 'c':3}"))// da erro

//todos os atributos no formato JSON o nome do atribhuto deve ser delimitado por aspas duplas "nomeAtributo"
console.log(JSON.parse('{"a":1, "b":2, "c":3}')) // jeito certo, formato válido, objeto gerado com formato JSON

// se for colocar uma string dentro de um JSON utilizar as aspas duplas""
console.log(JSON.parse('{ "a": 1, "b": "String", "c": true, "d": {}, "e": []}'))


