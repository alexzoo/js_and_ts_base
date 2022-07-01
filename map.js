// ⋕js.Pm.Enm.Mp.1
let arr = [1, 2, 3, 4, 5];
let result = arr.map(function (el) {
  return Math.sqrt(el);
});
console.log(result);

//⋕js.Pm.Enm.Mp.2
arr = ["str1", "str2", "str3"];
result = arr.map((el) => el + "!");
console.log(result);

//⋕js.Pm.Enm.Mp.3
arr = ["str1", "str2", "str3"];

result = arr.map((el) => {
  return el.split("").reverse().join("");
});
console.log(result);

//⋕js.Pm.Enm.Mp.5
arr = [1, 2, 3, 4, 5];
result = arr.map((el, indx) => el * indx);
console.log(result);

//
arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
result = arr.map(el => el)
console.log(result);

//
arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
result = arr.map(el => el.map(el2 => el2 * el2))
console.log(result);
