//⋕js.Pm.UF.CC.2
function sum100() {
    let sum = 0
    for (let i = 1; i <= 100; i++) {
        sum += i
    }
     console.log(sum);
}

sum100()

//⋕js.Pm.UF.Pr.2
function isPositive(num) {
    if (num >= 0) {
        console.log('+++');
    } else {
        console.log('---');
    }
}
isPositive(-3)


//⋕js.Pm.UF.Rt.10
function lessTen(num) {
    let div = num
    let i = 1
    while (true) {
        div = div / 2

        if (div < 10) {
            return i
        }
        i++
    }
}

console.log(lessTen(120));