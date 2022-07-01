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

//⋕js.Pm.FA.FA.4
let arr = [
	function() {console.log(('1'))},
	function() {console.log(('2'))},
	function() {console.log(('3'))},
];
for (let func of arr) {
    func()
}

//⋕js.Pm.FA.FO.1
let obj = {
    func1: function() {return(1);},
    func2: function() {return(2);},
    func3: function() {return(3);}
}
console.log(obj.func1() + obj.func2() + obj.func3());
for (let func in obj) {
    console.log(typeof(func));
}

//⋕js.Pm.FA.PFAP.6
let fn = function (func) {
	console.log(func(3));
}
fn(function(num) {
	return num * num * num;
});

//⋕js.Pm.FA.PFAP.10
// function test(arr, func) {
//     for (let i = 0; i < arr.lenght; i++) {
//         arr[i] = func(arr[i]);
//     }
//     return arr;
// }
// let result = test([1,2,3], function(num) {
//     return num * num;
// })
// console.log(result);

//
function test(arr, func) {
	for (let i = 0; i < arr.length; i++) {
		arr[i] = func(arr[i]);
	}
	
	return arr;
}

let result = test([1, 2, 3, 4, 5], function(num) {
	return num * num;
});

console.log(result);

//⋕js.Pm.FA.Clb.1
function each(arr, callback) {
	let result = [];
	
	for (let elem of arr) {
		result.push( callback(elem) ); // вызываем функцию-коллбэк
	}
	
	return result;
}

result = each(['star', 'asos'], function(str) {
	return str.split('').reverse().join('')
});
console.log(result);

//⋕js.Pm.FA.Clb.3
result = each(['star', 'asos'], function(str) {
    return str[0].toUpperCase() + str.slice(1)
});
console.log(result);

//⋕js.Pm.FA.Clb.4
function cube(num) {
	return num ** 3;
}
result = each([1, 2, 3, 4, 5], cube)
console.log(result);

//⋕js.Pm.FA.AF.1
// result = every([1, 2, 3, 4, 5], elem => elem > 0)

//⋕js.Pm.FA.Rc.2
function getSum(arr) {
	let sum = arr.shift() ** 2
	
	if (arr.length !== 0) {
		sum += getSum(arr);
	}
	
	return sum;
}

console.log(getSum([1, 2, 3, 4, 5]));

//⋕js.Pm.FA.RMs.1
function printObj(arr) {
    let str = ''
    for (let el of arr) {
            str += el
        }
        console.log(str.replace(/,/g, ''));
}
printObj(['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]])

