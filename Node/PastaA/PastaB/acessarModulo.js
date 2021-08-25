const moduloA = require('../../moduloA.js')
console.log(moduloA.ateLogo)

const c = require('./pastaC')

const http = require('http')

http.createServer((req, res) => {
    res.write('Chupador de manga')
    res.end()
}).listen(8080)