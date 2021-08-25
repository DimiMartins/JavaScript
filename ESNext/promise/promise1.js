
function falarDepoisDe(qtdeSegundos, frase) {
    //vai retornar uma promise
    //resolve é uma função que será chamada quando a promessa for cumprida
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(frase) //uma promise só aceita UM PARAMETRO
        }, qtdeSegundos * 1000);
    })
}
//posso encadear varias chamadas com o then
falarDepoisDe(3,'Arroz com feijão')
    .then(frase => frase.concat('!!!!'))
    .then(frase => frase.toUpperCase())
    .then(frase => console.log(frase))
    //para tratar o erro em caso de reject precisa chamar o catch
    .catch(e => console.log(e))
 