//
let arr = [1, 2, 3, 4, 5];

let result = arr.filter(elem => elem % 2 == 0);
console.log(result);

//⋕js.Pm.Enm.Fi.1
arr = [-1, 2, -3, 4, 5];
result = arr.filter(pos => pos > 0)
console.log(result);

//⋕js.Pm.Enm.Fi.2
arr = [-1, 2, -3, 4, 5];
result = arr.filter(pos => pos < 0)
console.log(result);

// ⋕js.Pm.Enm.Fi.4
arr = ['apple', 'banana', 'cherry', 'watermelon', 'mango']
result = arr.filter(n => n.length > 5)
console.log(result);

//⋕js.Pm.Enm.Fi.7
arr = [1, -2, 3, 4, -5];
let filtered = arr.filter(el => el < 0)
console.log(filtered.length);