function f(){
    let result = 0;
    for(let i = 0; i < f.arguments.length; i++){
        if(typeof f.arguments[i] === 'number'){
            result += arguments[i];
        } else throw new Error('all parameters type should be a Number');
    }
    return result;
}


console.log(f(1,2,3)); // 6
console.log(f(1,1,1,1,1,1,1,1)); // 8
console.log(f(1,2,'s',4)); // Error: all parameters type should be a Number
