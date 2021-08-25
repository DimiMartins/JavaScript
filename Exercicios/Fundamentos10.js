function divisivelPor3(num) {
    let resultado = num % 3 == 0
    if (resultado) {
        return true
    }else{
        return false
    }
}

console.log(divisivelPor3(87))