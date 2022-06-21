//⋕js.Pm.SM.Mth.1
console.log(Math.pow(2, 10));

//⋕js.Pm.SM.Mth.2
console.log(Math.sqrt(245));


//⋕js.Pm.SM.Mth.3
let arr = [4, 2, 5, 19, 13, 0, 10]
let sum = 0
for (let i = 0; i < arr.length; i++) {
    sum += Math.pow([i], 3)
}
console.log(Math.sqrt(sum));

//⋕js.Pm.SM.Mth.4
let num = Math.sqrt(379)
console.log(Math.floor(num));
console.log(num.toFixed(2));
console.log(num.toFixed(3));


//⋕js.Pm.SM.Mth.6
arr = [4, -2, 5, 19, -130, 0, 10]
let max = Math.max.apply(null, arr)
let min = Math.min.apply(null, arr)
console.log(max);
console.log(min);

//⋕js.Pm.SM.Mth.7
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
console.log(getRandomInt(1, 100));

//⋕js.Pm.SM.Mth.8
arr = []
for (let i = 0; i < 10; i++) {
    arr[i] = Math.floor(Math.random() * 100)
}
console.log(arr);