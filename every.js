let arr = [2, 4, 6, 8, -5];

let result = arr.every(el => el > 0)
console.log(result);

// ⋕js.Pm.Enm.Ev.2
arr = [2, 4, 6, 8, -5];

result = arr.every((el, ind) => el * ind < 20)
console.log(result);

// ⋕js.Pm.Enm.Sm.1
arr = [2, 4, 6, 8, -5];

result = arr.some((el) => el < 0)
console.log(result);