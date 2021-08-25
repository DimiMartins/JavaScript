const alunos = [
    { nome: "Joao", nota: 7.9},
    { nome: "maria", nota: 9.2}
]

// abordagem mais Imperativa

let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1/alunos.length)

// abordagem mais declarativa

const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2/alunos.length)


// select codigo, nome, email form clientes where ativo = 1
