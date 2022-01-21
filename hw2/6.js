function isEven(a){
    if(typeof a === 'number'){
        if(a%2 == 0){
            return true;
        } else return false;
    } else throw new Error("parameter type is not a Number")
}

console.log(isEven(3)); // false
console.log(isEven(4)); // true
console.log(isEven('Content')); // Error: parameter type is not a Number