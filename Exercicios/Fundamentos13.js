function diaDaSemana(num) {
    switch (num) {
        case 1:
            return "Domingo"
            break;
        case 2: 
            return "Segunda"
            break;
        case 3: 
            return "Terça"
            break;
        case 4: 
            return "Quarta"
            break;
        case 5:
            return "Quinta"
            break;
        case 6:
            return "Sexta"
            break;
        case 7:
            return "Sábado" 
            break;                   
        default:
            return "Dia inválido"
    }
}

console.log(diaDaSemana(3))