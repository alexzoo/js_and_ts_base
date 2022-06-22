
//⋕js.Pm.SM.St.3
let str = 'я учу javascript!'
let substr1 = str.substr(2, 3)
console.log(substr1);
let substring1 = str.substring(6, str.length - 1)
console.log(substring1);
let slice1 = str.slice(6, str.length - 1)
console.log(slice1);

//⋕js.Pm.SM.St.4
str = 'abcde'
console.log(str.indexOf('c'));

//⋕js.Pm.SM.St.5
str = 'я учу javascript!'
console.log(str.indexOf('!'));

//⋕js.Pm.SM.St.6
if (str.indexOf('я') == 0) {
    console.log('Yes');
} else {
    console.log('Yok');
}

//⋕js.Pm.SM.St.7
if (str.lastIndexOf('!') == str.length - 1) {
    console.log('Yes');
} else {
    console.log('Yok');
}

//⋕js.Pm.SM.St.10
str = 'https://code.mu/ru/javascript/book/prime/inbuilt/string/'
if (str.startsWith('https://')) {
    console.log('yes');
} else {
    console.log('no');
}

//⋕js.Pm.SM.St.11
str = 'https://code.mu/ru/javascript/book/prime/inbuilt/string/index.html'
if (str.endsWith('.html')) {
    console.log('yes');
} else {
    console.log('no');
}

//⋕js.Pm.SM.St.12
str = '1-2-3-4-5'
console.log(str.split('-'));

//⋕js.Pm.SM.St.13
str = '12345'
console.log(str.split(''));

//⋕js.Pm.SM.St.14
arr = [1, 2, 3, 4, 5]
console.log(arr.join('-'));


//⋕js.Pm.SM.Ar.1
arr = [1, 2, 3]
console.log(arr, arr.push(4, 5, 6));


//⋕js.Pm.SM.Ar.2
arr = [1, 2, 3]
console.log(arr, arr.unshift(4, 5, 6));

//⋕js.Pm.SM.Ar.3
arr = [1, 2, 3]
console.log(arr.shift());

//⋕js.Pm.SM.Ar.4
arr = [1, 2, 3]
console.log(arr.pop());

//⋕js.Pm.SM.Ar.5
arr = [1, 2, 3, 4, 5]
console.log(arr.slice(0, 3));

//⋕js.Pm.SM.Ar.7
arr = [1, 2, 3, 4, 5]
console.log(arr, arr.splice(1, 2));

//⋕js.Pm.SM.Ar.10
arr = [1, 2, 3, 4, 5]
console.log(arr.indexOf(3));

//⋕js.Pm.SM.Ar.11
arr = [1, 2, 3, 4, 5]
console.log(arr.includes(3));

//⋕js.Pm.SM.Prm.1
str = 'london'
let result = str.slice(0, -1) + str.slice(-1).toUpperCase()
console.log(result);

//⋕js.Pm.SM.Prm.5
str = 'var_test_text'
let words = str.split('_')
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1)
}
let res = words.join('')
console.log(res);


//⋕js.Pm.SM.Prm.7
str = 'var_test_text'
words = str.split('_').reverse().join('')
console.log(words);


//⋕js.Pm.SM.Mst.1
num = 12345;
arr = String(num).split('');

let sum = 0;
for (let digit of arr) {
	sum += +digit;
}

console.log(sum);

//⋕js.Pm.SM.Mst.2
num = 12345;
arr = String(num).split('');

sum = 0;
for (let digit of arr) {
	sum += +digit;
}

console.log(sum);