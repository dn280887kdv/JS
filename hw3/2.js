const arr = [1,2,3];

function filter(arr, func) {

    if(!Array.isArray(arr)){
        throw new Error('Первым аргументом функции может быть только массив');
    }

    if(typeof func !== 'function'){
        throw new Error('Вторым аргументом функции может быть только функция');
    }

    let res = [];
    for (let i = 0; i < arr.length; i++){
        if(func(arr[i], i, arr)){
            res.push(arr[i]);
        }
    }
    return res;
}

let arr2 = filter(arr, function(item, index, arr) {
    return item > 1;
});

console.log(arr2);