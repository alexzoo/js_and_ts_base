// ⋕js.Sp.RE.Inr.1
let str = 'ahb acb aeb aeeb adcb axeb';

let res = str.replace(/a.b/g, '!')
console.log(res);

// ⋕js.Sp.RE.Inr.3
str = 'aba aca aea abba adca abea';

console.log(str.replace(/ab../g, '!')); 


// ⋕js.Sp.RE.RO.1
str = 'aa aba abba abbba abca abea';
res = str.replace(/ab+a/g, '!')
console.log(res);

// ⋕js.Sp.RE.GB.1
str = 'ab abab abab abababab abea';
res = str.replace(/(ab)+/g, '!')
console.log(res);

// ⋕js.Sp.RE.ESCh.1
str = 'a.a aba aea';
res = str.replace(/a\.a/, '!')
console.log(res);

// ⋕js.Sp.RE.ESCh.3
str = '23 2+3 2++3 2+++3 345 567'
res = str.replace(/2\++3/g, '!')
console.log(res);

// ⋕js.Sp.RE.CB.1
str = 'aa aba abba abbba abbbba abbbbba'
res = str.replace(/ab{2,4}a/g, '!')
console.log(res);