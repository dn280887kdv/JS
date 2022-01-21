function f(arr, start = 0) {
    if (Array.isArray(arr)){
        if(arr.length > 0){
            if(start === arr.length) return;
            console.log(arr[start]);
            f(arr, start + 1);
        } else throw new Error("parameter can't be an empty");
    } else throw new Error("parameter type should be an array");
}



f([1,2,3]);
// 1
// 2
// 3
console.log(f(1,2,3))// Error: parameter type should be an array
console.log(f('Content')) // Error: parameter type should be an array
console.log(f([])) // Error: parameter can't be an empty