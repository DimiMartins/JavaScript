function area(l,a){
    const area = l * a
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m²`)
    }else{
        return area
    }
}


console.log(area(2,2)) // returna 4
console.log(area(2)) // retorna undefined
console.log(area()) // retorna nan (not a number)
console.log(area(2,3,4,5,6,56))// vai pegar os dois primeiros e igonar o resto
console.log(area(5,5)) // retorna undefined por ser acima de 20
