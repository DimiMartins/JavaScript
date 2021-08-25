const escola = [{
    nome: "turma m1",
    alunos: [{
        nome: "Gustavo",
        nota: 8.1
    },{
        nome: "Diana",
        nota: 8.3
    }]
},{    
    nome: "turma2",
    alunos: [{
        nome: "Rebeca",
        nota: 8.9
    }, {
        nome:"Roberta",
        nota: 7.2
    }]
}]

const getNota = a => a.nota
const getNotasDaTurma = t => t.alunos.map(getNota)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)
//flatMap
Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)