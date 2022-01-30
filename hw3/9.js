function arrayFill(value, length){
    console.log(typeof value);
    if(typeof value !== 'number' && typeof value !== 'string' && typeof value !== 'object' && !Array.isArray(value)){
        throw new Error('Первый параметр ф-ии принимает только: число, строку, объект, массив');
    }

    if(typeof length !== 'number'){
        throw new Error('Второй параметр ф-ии принимает только число');
    }

    let arr = new Array(length);

    for (let i = 0; i < arr.length; i++){
        arr[i] = value;
    }
    return arr;
}

console.log(arrayFill('x',5)); // [x,x,x,x,x]