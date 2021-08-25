const schedule = require('node-schedule')
//*/5 => vai executar de 5 em 5 segundos
// se no lugar do */5 fosse so 5 ele executaria somente no segundo 5
//* 15 => hora
// * * => foi ignorado o dia e o mês
// 2 => indica que é terça-Feira
const tarefa1 = schedule.scheduleJob('*/5 * 15 * * 2', function () {
    console.log("Execuntado tarefa1 ", new Date().getSeconds()) // mostra o segundos sendo mostrados
})

//temporizador padrão do java script
setTimeout(() => {
    tarefa1.cancel()
    console.log('Cancelamento da tarefa1')
}, 20000);
//setImmediate()
//setInterval() dispara uma função de tempos em tempos


const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = (new schedule.Range(1,5))
regra.hour = 15
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log("Executando a tarefa 2", new Date().getSeconds())
})