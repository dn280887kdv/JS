function getDivisors(a){
    if(typeof a === 'number'){
        if(a > 0){
            let arr = [];
            for (let i = 1; i <= a; i++){
                if(a%i == 0){
                    arr.push(i);
                }
            }
            return arr;
        } throw new Error("Error: parameter can't be a 0")
    } throw new Error("parameter type is not a Number");
}
console.log(getDivisors(12)); // [1, 2, 3, 4, 6, 12]
console.log(getDivisors('Content')); // Error: parameter type is not a Number
console.log(getDivisors(0)); // Error: parameter can't be a 0