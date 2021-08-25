function maiorOuMenor(a, b) {
    if (a > b) {
        return true
    }else if (a === b) {
        return "Igual"
    }else{
        return false
    }
}

console.log(maiorOuMenor(5,8))