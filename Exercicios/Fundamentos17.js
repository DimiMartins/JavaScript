function aumento(salarioAtual, plano) {
    switch (plano) {
        case "a":
        case "A":
            return salarioAtual += salarioAtual * 0.1    
            break;
        case "b":
        case "B":
            return salarioAtual += salarioAtual * 0.15    
            break;
        case "c":
        case "C":
            return salarioAtual += salarioAtual * 0.2        
        default:
            return "Plano inválido"
            break;
    }
}

console.log(aumento(1000,"a"))