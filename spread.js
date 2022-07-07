// ⋕js.Pm.Osr.Sp.1
let arr = [1, 2, 3, 4, 5];

function func(num1, num2, num3, num4, num5) {
    return num1 + num2 + num3 + num4 + num5
}
console.log(func(...arr));

console.log(func(...[1, 2], ...[3, 4, 5]));

// ⋕js.Pm.Osr.Sp.3
console.log(Math.min(...arr));

// ⋕js.Pm.Osr.SAM.2
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

arr  = ['a', ...arr1, ...arr1, 'b', 'c'];
console.log(arr);

//
let str = 'privet'
console.log([...str].reverse().join(''));

//
function func1(...rest) {
    console.log(rest);
}
func1(4)
func1(4, 5)
func1(4, 5, 4)

//⋕js.Pm.Osr.SRAp.1
function arifmet(...params) {
    let sum = 0
    for ( let num of params) {
        sum += num 
    }
    return sum / params.length
}
console.log(arifmet(1, 4, 5));

//⋕js.Pm.Dst.Ar.1
arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
let [name, surname, dep, position, salary] = arr
console.log(name);
console.log(surname);
console.log(dep);
console.log(position);
console.log(salary);

//⋕js.Pm.Dst.Ar.2
function func0() {
	return ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
}
let [name1, surname1, dep1, position1, salary1] = func0()
console.log(name1, surname1, dep1, position1, salary1);

//⋕js.Pm.Dst.Ar.3
arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

let [, , department2, position2, ]  = arr
console.log(department2, position2);

// ⋕js.Pm.Dst.Ob.1
let options = {
	color: 'red',
	width:  400,
	height: 500,
};

let {color, width, height} = options


// ⋕js.Pm.Dst.Ob.2
let {color: c, width: w, height: h} = options

//
let obj = {
	year:  2025,
	month: 12,
	day:   31,
};

let year, month, day; // объявим переменные заранее

// Тут, однако, в отличии от массивов, есть нюансы. Без команды let перед фигурными скобками эти фигурные 
// скобки не будут восприняты JavaScript как команда на деструктуризацию (а будут восприняты как блок кода):

// {year, month, day} = obj; // не будет работать
// Для решения проблемы команду на деструктуризацию объекта нужно брать в круглые скобки:

({year, month, day} = obj);


// ⋕js.Pm.Dst.Fn.1
function func([name, surname, department, position, salary]) {
	let name       = employee[0];
	let surname    = employee[1];
	let department = employee[2];
	let position   = employee[3];
	let salary     = employee[4];
}

func( ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000] );


// ⋕js.Pm.Dst.Fn.5
function func1({color, width, height}) {
	color  = options.color;
	width  = options.width;
	height = options.height;
}

func( {color: 'red', width: 400, height: 500} );