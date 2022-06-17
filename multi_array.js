//⋕js.Pm.Md.MA.1
let arr = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
	['j', 'k', 'l'],
];
console.log(arr[3][2], arr[1][1], arr[2][0], arr[0][0]);


//⋕js.Pm.Md.MAI.1
arr = [[1, 2, 3], [4, 5], [6]]
let sum = 0
for(let subArr of arr) {
    for(let el of subArr) {
        sum += el
    }
}
console.log(sum);


//⋕js.Pm.Md.MAI.2
arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
sum = 0
for (let subArr of arr) {
    for (let subSubArr of subArr) {
        for (let el of subSubArr) {
            sum += el
        }
    }
}
console.log(sum);


//⋕js.Pm.Md.MAI.3
arr = [[1, 2, 3], [4, 5], [6]]
sum = 0
for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
        sum += arr[i][j]
    }
}
console.log(sum);


//⋕js.Pm.Md.MAF.1
arr = []
for (let i = 0; i < 3; i++) {
    arr[i] = []
    for (let j = 0; j < 5; j++) {
        arr[i][j] = j + 1
    }
}
console.log(arr);


//⋕js.Pm.Md.MAF.2
arr = []
for (let i = 0; i < 3; i++) {
    arr[i] = []
    for (let j = 0; j < 4; j++) {
        arr[i][j] = 'x'
    }
}
console.log(arr);

//⋕js.Pm.Md.MAF.15
arr = []
let k = 1
for (let i = 0; i < 3; i++) {
    arr[i] = []
    for (let j = 0; j < 3; j++) {
        arr[i][j] = k
        k++
    }
}
console.log(arr);

//⋕js.Pm.Md.MO.1
let obj = {
	key1: {
		key1: 1,
		key2: 2,
		key3: 3,
	},
	key2: {
		key1: 4,
		key2: 5,
		key3: 6,
	},
	key3: {
		key1: 7,
		key2: 8,
		key3: 9,
	},
}
console.log(obj.key1.key1 + obj.key1.key2 + obj.key1.key3);


//⋕js.Pm.Md.MOI.1
obj = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
}
sum = 0
for (let key in obj) {
    let subObj = obj[key]

    for (let subKey in subObj) {
        sum += subObj[subKey]
    }
}
console.log(sum);

//⋕js.Pm.Md.VK.3
obj = {
	key1: {
		key2: '12',
		key3: '13',
	},
	key2: {
		key4: '24',
		key5: '25',
	},
}

let key1 = 'key2';
let key2 = 'key4';
console.log(obj[key1][key2]);

//⋕js.Pm.Md.MS.1
let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];
console.log(employees[0]['salary'] + employees[1]['salary']);

//⋕js.Pm.Md.MS.2
let students = {
	'boys':  ['Коля', 'Вася', 'Петя'],
	'girls': ['Даша', 'Маша', 'Лена'],
};
console.log(students['boys'][1], students['girls'][2]);

//⋕js.Pm.Md.MSI.1
employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];
for (let emp of employees) {
    console.log(emp.name + emp.salary);
}

//⋕js.Pm.Md.MSI.2
sum = 0
for (let emp of employees) {
    sum += emp.salary
}
console.log(sum);

//⋕js.Pm.Md.MSI.3
employees = [
	{
		name: 'name1',
		salary: 300,
		age: 28,
	},
	{
		name: 'name2',
		salary: 400,
		age: 29,
	},
	{
		name: 'name3',
		salary: 500,
		age: 30,
	},
	{
		name: 'name4',
		salary: 600,
		age: 31,
	},
	{
		name: 'name5',
		salary: 700,
		age: 32,
	},
];
sum = 0
for (let emp of employees) {
    if (emp.age >= 30) {
        sum += emp.salary
    }
}

console.log(sum);


//⋕js.Pm.Md.MSI.4
employees = [
	{
		name: 'name1',
		salary: 300,
		dismissed: false,
	},
	{
		name: 'name2',
		salary: 400,
		dismissed: true,
	},
	{
		name: 'name3',
		salary: 500,
		dismissed: false,
	},
	{
		name: 'name4',
		salary: 600,
		dismissed: true,
	},
	{
		name: 'name5',
		salary: 700,
		dismissed: false,
	},
];
for (let emp of employees) {
    if (!emp.dismissed) {
        console.log(emp.name + ' ' + emp.salary);
    }
}


//⋕js.Pm.Md.MSI.5
let data = {
	1: [
		'data11',
		'data12',
		'data13',
	],
	2: [
		'data21',
		'data22',
		'data23',
	],
	3: [
		'data31',
		'data32',
		'data33',
		'data34',
		'data35',
	],
	4: [
		'data41',
		'data42',
	],
};
for (let objKey in data) {
    for (let arrKey of data[objKey]) {
        console.log(arrKey);
    }
}


//⋕js.Pm.Md.MSI.6
data = [
	{
		1: 'data11',
		2: 'data12',
		3: 'data13',
		4: 'data14',
	},
	{
		1: 'data21',
		2: 'data22',
		3: 'data33',
	},
	{
		1: 'data31',
		2: 'data32',
	},
];
for (let arrKey of data) {
    for (let objKey in data[arrKey]) {
        console.log(objKey);
    }
}