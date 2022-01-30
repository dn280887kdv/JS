const arr = [1,2,3];

function forEach2(arr, func) {

    if(!Array.isArray(arr)){
        throw new Error('Первым аргументом функции может быть только массив');
    }

    if(typeof func !== 'function'){
        throw new Error('Вторым аргументом функции может быть только функция');
    }

    for (let i = 0; i < arr.length; i++){
        func(arr[i], i, arr);
    }
}

forEach2(arr, function(item, i, arr) {
    console.log('Element: ' + item + '\nindex: ' + i + '\narray: ' + arr);
});
