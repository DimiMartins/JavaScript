function frutas(f) {
    switch (f) {
        case "maca":
        case "maça":
        case "maçã":   
            return "Não vendemos essa fruta aqui"
            break;
        case "kiwi":
            return "Estamos com escassez de kiwi"
            break;
        case "melancia":
        case "melância":
            return "Aqui está! São 3 reais o kilo"
            break;
            default:
                return "Fruta inválida"
            break;
    }
}

console.log(frutas("kiwi"))