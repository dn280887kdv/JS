function f(arr) {
    if(!Array.isArray(arr)){
        throw new Error('Первым аргументом функции может быть только массив');
    }

    let res = 0;

    arr.map(value => {
        if(Array.isArray(value)){
            res += f(value);
        } else if (typeof value !== 'number') {
            throw new Error('Элемент массива не число и не массив');
        } else {
            res += value;
        }
        return res;
    })
    return res;
}

const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
console.log(f(arr)); // 12
const arr2 = [[[[[1,2]]]]];
console.log(f(arr2)); // 3
const arr3 = [[[[[1,2]]],2],1];
console.log(f(arr3)); // 6
const arr4 = [[[[[]]]]];
console.log(f(arr4)); // 0
const arr5 = [[[[[],3]]]];
console.log(f(arr5)); // 3
const arr6 = [3, 5];
console.log(f(arr6)); // 8