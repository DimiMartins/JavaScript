var numero =1 
{// sempre tentar fugir do escopo geral
    var numero =2
    console.log("dentro"+numero) 
}

console.log("fora"+numero)

// o let tem escopo de função, escopo global e escopo de bloco 
// o var tem escopo global e escopo de função, NAO tem escopo de bloco
