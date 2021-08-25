//forI itera em cima de indice
//forOf itera em cima de valores

for (let letras of 'Coder') {
    console.log(letras)
}
console.log("")
const assuntosEcma = ['Map', 'Set', 'Pormise']
//usando o for in é percorrido em cima do indice
//para pegar o valor eu tenho que pegar a partir do indice
for (const i in assuntosEcma) {
    console.log(i)
}
console.log("")
for (const i of assuntosEcma) {
    console.log(i)
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

for (const i of assuntosMap) {
    console.log(i)
}

//percorrendo so as chaves
for (const chave of assuntosMap.keys()) {
    console.log(chave)
}
//percorrendo os valores
for (const valor of assuntosMap.values()) {
    console.log(valor)
}
//percorrendo chave e valor usando o destructuring
for (const [ch,vl] of assuntosMap.entries()) {
    console.log(ch,vl)
}
//posso usar o forOff no set tambem
const s = new Set(['a','b','c'])
for (const letras of s) {
    console.log(letras)
}