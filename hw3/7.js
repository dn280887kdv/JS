var arr = ['abcd', 'abcde', 'ab', 'abc'];

// var arrLength = [];
// for (var i = 0; i < arr.length; i++) {
//     arrLength[i] = arr[i].length;
// }

var arrLength = arr.map(elem => {
    let test = elem.length;
    return test;
});

console.log( arrLength ); // 4,5,2,3
