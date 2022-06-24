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

//⋕js.Pm.UF.Ex.6
function addToArr(num) {
    let arr = []
    for (let i = 0; i < num; i++) {
        arr.push(i + 1)
    }
    return arr
}
console.log(addToArr(5));

//⋕js.Pm.UF.Ex.7
function addToArr2(from, till) {
    let lenght = till - from + 1
    let arr = []
    for (let i = from; i <= till; i++) {
        arr.push(i)
    }
    return arr
}
console.log(addToArr2(3, 7));

//⋕js.Pm.UF.Fl.1
function isEven(arr) {
    for (let el of arr) {
        if (el % 2 !== 0) {
            return false
        }
    }
    return true
}
console.log(isEven([2, 4, 5, 8]));

//⋕js.Pm.UF.LO.1
function func(a, b) {
    return a == b
}
console.log(func(4,4));

//⋕js.Pm.UF.Mst.1
function func1() {
	return 3
}
function func2() {
	return 5
}

console.log( func1() + func2() );


//⋕js.Pm.UF.Mst.2
function sum(arr) {
	let res = 0;
	for (let elem of arr) {
		res += elem;
	}
    return res;
}

console.log(sum([1, 2, 3, 4, 5]));

//⋕js.Pm.FA.FCR.1
function func3() {
	return '!';
}
console.log(func3);