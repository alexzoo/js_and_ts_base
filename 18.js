// ⋕js.Pm.Bs.SV.1
let und
console.log(und);

// ⋕js.Pm.Bs.SV.2
let varNull = null
console.log(varNull)

// ⋕js.Pm.Bs.SV.3
let varTrue = true
console.log(varTrue)

// ⋕js.Pm.Bs.SV.5
let str1 = 'abc', str2 = 'fdfdf'
console.log(str1 * str2)

let num = 12345;
let str = String(num); // преобразуем наше число к строке
console.log(str.length);

//⋕js.Pm.Bs.SCh.3
let str3 = 'abcde'
let num3 = 2
console.log(str3[num3]);

//⋕js.Pm.Bs.LSCh.3
let str4 = 'some string'
console.log(str4[str4.length - 3]);

//⋕js.Pm.Bs.DS.1
let str5 = '12345'
console.log(Number(str5[0]) + Number(str5[1]) + Number(str5[2]) + Number(str5[3]) + Number(str5[4]));


//⋕js.Pm.Bs.DS.4
let str6 = '12345'
const reverse = str => Array.from(str).reverse().join('');
console.log(reverse(str6));

//⋕js.Pm.Bs.IC.2
let a = 0.3 + 0.1
console.log(a.toFixed(40));

//⋕js.Pm.Bs.Mst.1
let num1 = 1;
let num2 = 2;
console.log('сумма: ', num1 + num2);

//⋕js.Pm.Bs.Mst.13
let aaa = 1;
let bbb = 2;
let ccc = 3;
console.log(aaa + bbb + ccc);

//⋕js.Pm.Cl.Ar.7
let arr1 = [12, 34, 'asa', '555']
console.log(arr1[arr1.length - 1]);

//
let arr2 = [1, 2, 3]
arr2[3] = 4
arr2[4] = 5
console.log(arr2);

//⋕js.Pm.Cl.Ar.13
let arr3 = [];

arr3[3] = 'a';
arr3[8] = 'b';
console.log(arr3.length);

//⋕js.Pm.Cl.Ob.1
let obj1 = {1: 'a', 2: 'b', 3: 'c'}
console.log(obj1);

//⋕js.Pm.Cl.Ob.2
let obj2 = {a: 1, b: 2, c: 3}
console.log(obj2['a'] + obj2['b'] + obj2['c']);

//⋕js.Pm.Cl.Ob.7
let user = {
    name: 'Ivan',
    surname: 'Ivanov',
    patronymic: 'Ivanovich'
}
console.log(user.name + ' ' + user.surname + ' ' + user.patronymic);

//⋕js.Pm.Cl.OD.2
let arr4 = ['a', 'b', 'c', 'd', 'e']
delete arr4[1]
delete arr4[3]
console.log(arr4)


//⋕js.Pm.Cd.IEC.1

let day = 16

if (day < 10) {
    console.log('first decade');
} else if (day > 10 && day < 20) {
    console.log('second decade');
} else {
    console.log('third decade');
}

//⋕js.Pm.Cd.Scp.2
let age = 27;
let adult;

if (age >= 18) {
	adult = true;
} else {
	adult = false;
}

console.log(adult);


//⋕js.Pm.Cd.Ex.1
let min = 58

if (min >=0 && min <= 29) {
    console.log('первая треть');
}
if (min >= 30 && min <= 44) {
    console.log('вторая треть');
}

if (min >= 45 && min <= 59) {
    console.log('третья треть');
}


