let arr1 = [1, 2, -4, 3, -9, -1, 7];
let arr2 = [];
function isPositive(a){
    if(typeof a === 'number'){
        if(a > 0){
            return true;
        } else return false;
    } else throw new Error("parameter type is not a Number");
}

for(let i = 0; i < arr1.length; i++){
    if(isPositive(arr1[i])){
        arr2.push(arr1[i]);
    }
}


// Пример использования функции isPositvie()
console.log(isPositive(-3)) // вернет false
console.log(isPositive(3)) // вернет true
console.log(arr2);

console.log(isPositive('s')) // Error: parameter type is not a Number
