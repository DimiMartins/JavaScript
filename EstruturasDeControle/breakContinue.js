const nums = [1,2,3,4,5,6,7,8,9,10]

for(let i in nums){
    if (i == 5) {
    break // desvio de fluxo para fora do laço
    }
    console.log(`${i} = ${nums[i]}`) 
}
const nums2 = [1,2,3,4,5,6,7,8,9,10]

for(y in nums2){
    if (y == 5) {
        continue // interrompe a repetição corrente e vai para proxima repetição
    }
    console.log(`${y} = ${nums2[y]}`)
}

const nums3 = [1,2,3,4,5,6,7,8,9,10]

externo: for(a in nums3){
    for(b in nums3){
        if (a == 2  && b == 3) break externo 
        console.log(`Par = ${a}, ${b}`)
    }
}