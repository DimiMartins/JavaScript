function carro(c) {
    switch (c) {
        case "Hatch":
            return "Compra efetuada com sucesso"
            break;
        case "sedans":
            return "tem certeza que não prefere esse modelo?"
            break
        case "motocicletas":
            return "Tem certeza que não prefere esse modelo?"    
            break;
        case "caminhonetes":
            return "tem certeza que não prefere esse modelo?"           
            break;
            default:
                return "Carro inválido"
            break;
    }
}

console.log(carro("sedans"))