//⋕js.Pm.Cd.Ex.2
let arr1 = [12, 2, 33, 98]

if (arr1.length > 3) {
    console.log(arr1[0] + arr1[1] + arr1[2] + arr1[3]);
}


//⋕js.Pm.Cd.Ex.3

let num = 2035010
let str = String(num)
if(str[str.length - 1] == 0) {
    console.log('есть 0 в конце');
} else {
    console.log('нет 0 в конце');
}

//⋕js.Pm.Cd.Ex.5

let num2 = 28
if (num2 % 2 == 0) {
    console.log('четное число');
} else {
    console.log('не четное число');
}

//⋕js.Pm.Cd.Ex.6
num = 18
if (num % 3 == 0) {
    console.log('число делится на 3');
} else {
    console.log('число не делится на 3');
}

//⋕js.Pm.Cd.Prm.3
num = 512345
str = String(num)
if (str[0] == 1 || str[0] == 2 || str[0] == 3) {
    console.log('yes');
} else {
    console.log('no');
}

num = 2
switch (num) {
    case 1:
        console.log('winter');
        break;
    case 2:
        console.log('spring');
        break
    case 3:
        console.log('summer');
        break
    case 4:
        console.log('outumn');
        break
    default:
        break;
}


//⋕js.Pm.Cd.TO.1
num = 3
let result = num < 0 ? -1 : 1
console.log(result);

//⋕js.Pm.Cd.LO.2
let a = 5 * (7 - 4);
let b = 1 + 2 + 7;
console.log(a > b);


//⋕js.Pm.Cd.Mst.1
let num1 = 1;
num2 = 2;

if (num1 + num2 === 3) {
	console.log('+++');
} else {
	console.log('---');
}


//⋕js.Pm.Cd.Mst.9
num = String(12);

if (num.length === 2) {
	console.log('+++');
} else {
	console.log('---');
}


//⋕js.Pm.Lp.Wl.1
// let i = 0
// while (i < 100) {
//     console.log(i);
//     i++
// }


// //⋕js.Pm.Lp.Wl.2
// i = 33
// while (i <= 99) {
//     console.log(i);
//     i++
// }


//⋕js.Pm.Lp.Wl.5
// i = 30
// while (i > 0) {
//     console.log(i);
//     i--
// }


//⋕js.Pm.Lp.Fr.1
for (let i = 0; i < 11; i++) {
    console.log(i); 
}