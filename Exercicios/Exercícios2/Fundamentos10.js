function repeticao(n) {
    let repet = ""
    for (let i = 0; i < n; i++) {
        repet += "+"
    }
    return repet
}

console.log(repeticao(3))