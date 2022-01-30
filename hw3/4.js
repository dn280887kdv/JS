const arr = [1,2,3];

function some(arr, func) {

    if(!Array.isArray(arr)){
        throw new Error('Первым аргументом функции может быть только массив');
    }

    if(typeof func !== 'function'){
        throw new Error('Вторым аргументом функции может быть только функция');
    }

    let res = [];
    for (let i = 0; i < arr.length; i++){
        if(func(arr[i], i, arr)){
            return true;
        }
    }
    return false;
}

let arr2 = some(arr, function(item, index, arr) {
    return item > 2;
});

console.log(arr2);