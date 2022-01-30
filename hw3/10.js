const arr = [3,2,1];

function reverse(arr) {
    if(!Array.isArray(arr)){
        throw new Error('В функцию можно передавть только массив')
    }

    if(arr.length === 0){
        throw new Error('Массив не должен быть пустым');
    }

    let new_arr = [];
    for (let i = arr.length-1; i >= 0 ; i-- ){
        console.log(i)
        new_arr.push(arr[i]);
    }
    arr = new_arr;
    return arr;
}
console.log(reverse(arr)); // [1,2,3]
