// --- MÜKEMMEL SAYILAR --- //
console.log("===========================================================================")
console.log("=_=                          MÜKEMMEL SAYILAR                           =_=")
console.log("===========================================================================")

let perfectNumbers =[]
for (let number = 1; number <= 1000; number++) {
    let result = 0
    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            result = result + i
        }
    }
    if (result == i) {
        perfectNumbers.push(result)
    }
}

perfectNumbers.forEach(value =>{
    console.log(value + ": Mükemmel Sayı")
})