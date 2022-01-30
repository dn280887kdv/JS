const arr = [1,2,3];

function every(arr, func) {

    if(!Array.isArray(arr)){
        throw new Error('Первым аргументом функции может быть только массив');
    }

    if(typeof func !== 'function'){
        throw new Error('Вторым аргументом функции может быть только функция');
    }

    let res = [];
    for (let i = 0; i < arr.length; i++){
        if(!func(arr[i], i, arr)){
            return false;
        }
    }
    return true;
}

let arr2 = every(arr, function(item, index, arr) {
    return item > 0;
});

console.log(arr2);