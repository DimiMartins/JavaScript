function resultado(cod, nota1, nota2, nota3) {
    let notas = [nota1, nota2, nota3]
    notas.sort()
    let total = (notas[0] * 4) + (notas[1] * 3) + (notas[2] * 3) / 10
    return `${cod} : [${nota1}, ${nota2}, ${nota3}] SITUAÇÃO: ${((nota1+ nota2 + nota3) / 3) >= 5 ? "Aprovado": "Reprovado"}`
}

console.log(resultado(100,3,1,5))