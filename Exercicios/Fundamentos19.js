function lanchonete(cod, qtde) {
    switch (cod) {
        case 100:
            return `Cachorro quente: R$3,00\n
            Quantidade pedida: ${qtde}\n
            Total: R$${3 * qtde}`
            break;
        case 200:
            return `Hamburguer Simples: R$4,00\n
            Quantidade pedida: ${qtde}\n
            Total: R$${4 * qtde}`
            break;
        case 300:
            return `CheeseBurguer: R$5,50\n
            Quantidade pedida: ${qtde}\n
            Total: R$${5.5 * qtde}`
            break;
        case 400:
            return `Bauru: R$7,50\n
            Quantidade pedida: ${qtde}\n
            Total: R$${7.5 * qtde}`
            break;    
        case 500:
            return `Refrigerante: R$3,50\n
            Quantidade pedida: ${qtde}\n
            Total: R$${3.5 * qtde}`
            break;
        case 600:
            return `Suco: R$2,80\n
            Quantidade pedida: ${qtde}\n
            Total: R$${2.8 * qtde}`
            break;
        default:
            return "Codigo inválido"
            break;
    }
}

console.log(lanchonete(300,2))