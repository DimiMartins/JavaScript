function calculadora(a, sinal, b) {
    switch (sinal) {
        case "+":
            return a + b
            break;
        case '-':
            return a - b
            break;
        case "*":
            return a * b
            break;
        case "/":
            return a / b
            break;
        default:
            return "Sinal inválido"
            break;
    }
}
    console.log(calculadora(2,"+",4))