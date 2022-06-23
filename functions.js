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

//⋕js.Pm.UF.Ex.2
function getDigitsSum(num) {
    let digits = String(num).split('')
    let sum = 0
    for (let el of digits) {
        sum += +el
    }
    return sum
}

console.log(getDigitsSum(555));


//⋕js.Pm.UF.Ex.4
function reverseStr(str) {
    return str.split('').reverse().join('')
}

console.log(reverseStr('hello world'));

//⋕js.Pm.UF.Ex.5
function delElem(arr, num) {
    let i = 0;
    while (i < arr.length) {
      if (arr[i] === num) {
        arr.splice(i, 1);
      } else {
        ++i;
      }
    }
    return arr;
}
console.log(delElem([3, 5, 2, 5], 5));