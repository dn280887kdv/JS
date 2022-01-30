const arr = [1,2,3];
const acc = 0;
console.log(typeof acc);

function reduce(arr, func, acc) {

    if(!Array.isArray(arr)){
        throw new Error('Первым аргументом функции может быть только массив');
    }

    if(typeof func !== 'function'){
        throw new Error('Вторым аргументом функции может быть только функция');
    }

    if(typeof acc !== 'number' && typeof acc !== 'string'){
        throw new Error('Третьим аргументом функции может быть только число или строка');
    }

    let res = acc;
    for (let i = 0; i < arr.length; i++){
        res += func(acc, arr[i], i, arr);
    }
    return res;
}

let arr2 = reduce(arr, function(acc, item, index, arr) {
    return item + acc;
}, acc);

console.log(arr2);