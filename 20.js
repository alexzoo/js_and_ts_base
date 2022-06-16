//⋕js.Pm.Lp.Fr.3
// for (let i = 0; i < 21; i++) {
//      if (i % 2 == 0) {
//          console.log(i);
//      }
// }

// //⋕js.Pm.Lp.Fr.5
// for (let i = 10; i > 0 ; i--) {
//     console.log(i);
// }

//⋕js.Pm.Lp.RLA.1
let counter = 1;
for (let i = 1; i <= 10; i++) {
  counter = counter * i;
}
console.log(counter);

//⋕js.Pm.Lp.AFr.1
let arr = ["a", "b", "c", "d", "e"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//⋕js.Pm.Lp.AFr.3
arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 != 0) {
    console.log(arr[i]);
  }
}

//⋕js.Pm.Lp.AFr.4
arr = [1, 2, 3, 4, 5];
let result = 1;
for (let i = 0; i < arr.length; i++) {
  result *= arr[i];
}
console.log(result);

//⋕js.Pm.Lp.AFr.6
arr = [2, 5, 9, 15, 1, 4];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 3 && arr[i] < 10) {
    console.log(arr[i]);
  }
}

//⋕js.Pm.Lp.AFr.7
arr = [-3, -10, 4, 5, 22, -4, 7];
result = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    result += arr[i];
  }
}
console.log(result);

//⋕js.Pm.Lp.AFr.9
arr = [10, 20, 30, 50, 235, 3000];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] / 10 == 1 || arr[i] / 10 == 2 || arr[i] / 10 == 3) {
    console.log(arr[i]);
  }
}

//⋕js.Pm.Lp.AFr.10
arr = [10, 20, 30, 50, 235, 3000];
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

//⋕js.Pm.Lp.FO.1
arr = ["a", "b", "c", "d", "e"];
for (const i of arr) {
  console.log(i);
}

//⋕js.Pm.Lp.FI.1
result = 0;
let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
for (const key in obj) {
  result += obj[key];
}
console.log(result);

//⋕js.Pm.Lp.Br.1
arr = [10, 20, 30, 50, 0, 235, 3000];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 0) {
    break;
  } else {
    console.log(arr[i]);
  }
}

//⋕js.Pm.Lp.Br.3
arr = [10, 20, 30, 50, 3, 235, 3000];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 3) {
    console.log(i);
    break;
  }
}

//⋕js.Pm.Lp.Fl.1
arr = ["a", "b", "c", "d", "e"];

let flag = false;
for (const i of arr) {
  if ((arr = "c")) {
    flag = true;
    break;
  }
}
if (flag) {
  console.log("есть C");
} else {
  console.log("нет С");
}

//⋕js.Pm.Lp.PrNm.1
num = 37;
flag = true;

for (let i = 2; i < num; i++) {
  if (num % i == 0) {
    flag = false;
    break;
  }
}
console.log(flag);

//⋕js.Pm.Lp.AIN.1
num = 100;
counter = 1;
while (num < 1000) {
  num = num * 3;
  counter++;
}
console.log(num, counter);

//⋕js.Pm.Lp.AIN.2
for (var num = 100, i = 0; num < 1000; num *= 3, i++);
console.log(num, i);

//⋕js.Pm.Lp.SFm.1
let str = "";
for (let i = 0; i < 5; i++) {
  str += "0";
}
console.log(str);

//⋕js.Pm.Lp.SFm.2
str = "";
for (let i = 1; i <= 9; i++) {
  str = str + i;
}
console.log(str);

//⋕js.Pm.Lp.SFm.3
str = "";
for (let i = 9; i > 0; i--) {
  str = str + i;
}
console.log(str);

//⋕js.Pm.Lp.SFm.4
str = "-";
for (let i = 1; i <= 9; i++) {
  str = str + i + "-";
}
console.log(str);

//⋕js.Pm.Lp.FrDT.1
for (let i = 1; i <= 1000; i++) {
  let str = String(i);

  if (str[0] + str[1] == 5) {
    console.log(i);
  }
}

// //⋕js.Pm.Lp.FrDT.2
// result = ''
// for (let i = 1; i < 30; i++) {
//     result += i
// }
// console.log(result);

// //⋕js.Pm.Lp.Nsd.1
// for (let i = 1; i <= 9; i++) {
//     for (let j = 1; j <= 3; j++) {
//         console.log(i);
//     }
// }

//⋕js.Pm.Lp.Nsd.2
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(String(i) + String(j));
  }
}

//⋕js.Pm.Lp.ALF.3
arr = [];
for (let i = 0; i < 20; i++) {
  arr[i] = i + 1;
}
console.log(arr);

//⋕js.Pm.Lp.ALF.4
arr = [];
for (let i = 1, j = 0; i <= 99; i += 2, j++) {
  arr[j] = i;
}
console.log(arr);

//⋕js.Pm.Lp.ALCh.1
arr = [3, 5, 4, 6, 7];
for (let i = 0; i < arr.length; i++) {
  arr[i] **= 2;
}
console.log(arr);

//⋕js.Pm.Lp.ALCh.2
arr = [3, 5, 4, 6, 7];
for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] - 1;
}
console.log(arr);

//⋕js.Pm.Lp.ALCh.3
arr = [3, 5, 4, 6, 7];
for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] + 10;
}
console.log(arr);

//⋕js.Pm.Lp.APF.2
arr = [];
for (let i = 1; i <= 10; i++) {
  arr.push(i);
}
console.log(arr);

//⋕js.Pm.Lp.APF.3
arr = [];
for (let i = 1; i <= 10; i++) {
  arr.push("x");
}
console.log(arr);

//⋕js.Pm.Lp.APF.4
arr = [-1, -2, 2, 3, 5, -10, 7];
let res = [];
for (const el of arr) {
  if (el > 0) {
    res.push(el);
  }
}
console.log(res);

//⋕js.Pm.Lp.APF.5
arr = ["a", "b", "c", "d", "e"];
res = [];
for (let i = arr.length - 1; i >= 0; i--) {
  res.push(arr[i]);
}
console.log(res);

//⋕js.Pm.Lp.OLF.2
let arr1 = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
obj = {};
for (let i = 0; i <= arr.length - 1; i++) {
  obj[arr1[i]] = arr2[i];
}
console.log(obj);

// ⋕js.Pm.Lp.OLF.3
arr1 = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
arr2 = [1, 2, 3, 4, 5, 6, 7];
obj = {};
for (let i = 0; i <= arr.length - 1; i++) {
  obj[arr2[i]] = arr1[i];
}
console.log(obj);

//⋕js.Pm.Lp.OLF.4
obj = { a: 12, b: 21, c: 13, d: 23, e: 17 };
res = {};
for (const key in obj) {
  if (obj[key] > 10 && obj[key] < 20) {
    res[key] = obj[key];
  }
}
console.log(res);

//⋕js.Pm.Lp.OLF.5
obj = { 1: "пн", 2: "вт", 3: "ср", 4: "чт", 5: "пт", 6: "сб", 7: "вс" };
res = {};
for (const key in obj) {
  if (key % 2 == 0) {
    res[key] = obj[key];
  }
}
console.log(res);

//⋕js.Pm.Lp.OLF.6
obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
for (const key in obj) {
  obj[key] = obj[key] ** 2;
}
console.log(obj);


//⋕js.Pm.Lp.OLF.7
obj = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'}
res = {}
for (const key in obj) {
  res[obj[key]] = key
}
console.log(res);


//⋕js.Pm.Lp.FChT.1
obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
}
for (const key in obj) {
  obj[key] = obj[key] + (obj[key] *  0.1)
}
console.log(obj);


//⋕js.Pm.Lp.FChT.2
obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
}
for (const key in obj) {
  if ( obj[key] <= 400) {
    obj[key] = obj[key] + (obj[key] *  0.1)
  }
}
console.log(obj);

//⋕js.Pm.Lp.FChT.3
arr1 = [1, 2, 3, 4, 5];
arr2 = [6, 7, 8, 9, 10];
res = {}
for (let i = 0; i < arr.length; i++) {
  res[arr1[i]] = arr2[i];
}
console.log(res);


//⋕js.Pm.Lp.FChT.4
obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10}
let sumKey = 0
let sumValue = 0
for (let key in obj) {
  sumKey += key
  sumValue += obj[key]
}
console.log(sumKey / sumValue);


//⋕js.Pm.Lp.FChT.6
obj = {
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
}
res = []
for (let key in obj) {
  let str = String(obj[key])
  if (str[0] == 1 || str[0] == 2) {
    res.push(str)
  }
}
console.log(res);


//⋕js.Pm.Lp.FChT.7
arr = ['a', 'b', 'c', 'd', 'e']
res = {}
for (let i = 0; i < arr.length; i++) {
  res[i + 1] = arr[i]
}
console.log(res);


//⋕js.Pm.Lp.FChT.8
//⋕js.Pm.Lp.FChT.7
arr = ['a', 'b', 'c', 'd', 'e']
res = {}
for (let i = 0; i < arr.length; i++) {
  res[arr[i]] = i + 1
}
console.log(res);


//⋕js.Pm.Lp.AEC.1
arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3]
counter = 0
for (let el of arr) {
  if (el == 3) {
    counter++
  }
}
console.log(counter);


//⋕js.Pm.Lp.AEC.2
arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3]
counter = 0
for (let el of arr) {
  if (el == 3 || el == 2) {
    counter++
  }
}
console.log(counter);


//⋕js.Pm.Lp.AEC.3
str = 'Hello world'
count = {}
for (let el of str) {
  if (count[el] === undefined) {
    count[el] = 1
  } else {
    count[el]++
  }
}
console.log(count);


//⋕js.Pm.Lp.AEN.1
arr = [1, 2, 3, 4, 5]
for (let i = 0; i <= arr.length; i++) {
  console.log(arr[i + 1]);
}


//⋕js.Pm.Lp.AEN.2
arr = [1, 2, 3, 4, 5]
for (let i = 1; i < arr.length; i++) {
  console.log(arr[i - 1] + arr[i]);
}


//⋕js.Pm.Lp.PLC.1
str = ''
for (let i = 2; i <= 10; i += 2) {
  str += 'xx'
  console.log(str + '\n');
}


//⋕js.Pm.Lp.PLC.2
for (let i = 1; i <= 9; i+=2) {
  let str = ''
  for (let j = 1; j <= i; j++) {
    str += i
  }
  console.log(str + '\n');
}


//⋕js.Pm.Lp.PLC.3
for (let i = 10; i >= 2; i -= 2) {
  let str = ''
  for (let j = 0; j < i; j++) {
    str += 'x'
  }
  console.log(str + '\n');
}

//⋕js.Pm.Lp.PLC.4
for (let i = 9; i >= 1; i--) {
  let str = ''
  for (let j = 0; j < i; j++) {
    str += i
  }
  console.log(str + '\n');
}


//⋕js.Pm.Lp.SAAF.1
arr = []
str = ''
for (let i = 2; i <= 10; i += 2) {
  str += 'xx'
  arr.push(str)
}
console.log(arr);

//⋕js.Pm.Lp.SAAF.2
arr = []
for (let i = 1; i <= 5; i++) {
  let str = ''
  for (let j = 0; j < 5; j++) {
    str += i
  }
  arr.push(str)
}
console.log(arr);


//⋕js.Pm.Lp.Cdg.1
arr = [10, 20, 30, 40, 21, 32, 51]
let sum = 0
for (let el of arr) {
  let str = String(el)
  if (str[0] == 1 || str[0] == 2) {
    sum += +str
  }
}
console.log(sum);


//⋕js.Pm.Lp.Dbg.1
obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
sum = 0;

for (let elem in obj) {
  let str = String(obj[elem])
	if (str[0] == '1' || str[0] == '2') {
		sum += +str;
	}
}
console.log(sum);


//⋕js.Pm.Lp.Mst.1
for (let i = 0; i <= 10; i++) {
	console.log(i);
}


//⋕js.Pm.Lp.Mst.2
for (let i = 10; i >= 0; i--) {
	console.log(i);
}

//
res = 0
for (let i = 1; i <= 10; i++) {
	res += i;
}
console.log(res);


//⋕js.Pm.Lp.Mst.19
arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
	if (elem % 2 == 0) {
		console.log(elem);
	}
}


//⋕js.Pm.Lp.Mst.18
arr = [1, 2, 3, 4, 5, 7, 8];
res = false;

for (let elem of arr) {
	if (elem === 8) {
		res = true;
		break;
	}
}
console.log(res);


//⋕js.Pm.Lp.Mst.16
obj = {a: 1, b: 2, c: 3};
sum = 0;

for (let key in obj) {
	sum += +obj[key];
}

console.log(sum);


//⋕js.Pm.Lp.Prm.4
arr = []
for (let i = 0; i < 10; i++) {
  arr[i] = 'x'
}
console.log(arr);


//⋕js.Pm.Lp.Prm.5
arr = []
for (let i = 1; i <= 10; i++) {
  arr[i - 1] = i
}
console.log(arr);