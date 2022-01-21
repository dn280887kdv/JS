function f(a){
    if(typeof a === 'number'){
        return a*a*a;
    } else throw new Error('parameter type is not a Number');
}

console.log(f(2)); // 8
f('Content'); // Error: parameter type is not a Number

