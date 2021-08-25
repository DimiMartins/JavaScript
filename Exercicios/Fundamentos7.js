function bhaskara(a,b,c) {
    let delta = (Math.pow(b,2))- 4 * a * c
    let raizDelta = Math.sqrt(delta,2)
    let x1 = ((-b) + raizDelta )/ (2*a)
    let x2 = ((-b) - raizDelta )/ (2*a)
    return `Seu delta é ${delta}\n
    Seu raiz de delta é ${raizDelta}\n
    Seu x1 = ${x1}\n
    Seu x2 = ${x2}`
}
console.log(bhaskara(1,12,-13))