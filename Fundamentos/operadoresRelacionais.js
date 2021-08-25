// usando 3 = ele considera o tipo

// === -> extritamente igual 
console.log('01', '1' == 1)
console.log('02', '1' === 1)// false porque o primeiro 1 é uam string e o outro e é um number
console.log('03', '3' != 3)
console.log('04', '3' !== 3)

console.log('05', 3<2)
console.log('06', 3>2)
console.log('07', 3<=2)
console.log('08', 3>=2)

const d1 = new Date(0)// 1 de janeiro de 1970
const d2 = new Date(0)
console.log('09', d1 === d2)
console.log('09', d1 == d2)// em ambos os casos da falso pois ele esta comparando endereço de memoria
console.log('11', d1.getTime() === d2.getTime)
console.log('12', undefined == null)
console.log('13', undefined === null)

// tentar sempre usar os tres iguais (===)