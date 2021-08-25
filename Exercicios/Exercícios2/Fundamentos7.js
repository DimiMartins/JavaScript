function entre(num, min, max,inclusivo) {
    if (num > min && num < max) {
        return true
    }else if (num >= min && num <= max && inclusivo == true) {
        return true
    }else{
        return false
    }
}

console.log(entre(11,10,100))