function triangulo(medA, medB, medC) {
    if (medA === medB && medB === medC ) {
        return "Equilatero"
    }else if (medA == medB || medA == medC || medB == medC) {
        return "Isóceles"
    }else{
        return "Escaleno"
    }
}

console.log(triangulo(2,4,1))