const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

// bind amarrra um objeto pra ele sser o dono da execução
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
