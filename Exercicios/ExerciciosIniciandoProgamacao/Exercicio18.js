/* Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão
deverá ser de duas casas decimais, arredondando se necessário.
 */
function areaTriangulo(base, altura) {
    const resultado = (base * altura) / 2
    return `A area do seu triangulo é de ${resultado.toFixed(2)}` 
}

console.log(areaTriangulo(55,25))