function f(a){
    if(typeof a === 'number'){
        if(a >= 1 && a <= 7){
            switch (a) {
                case 1: return "Воскресенье";
                case 2: return "Понедельник";
                case 3: return "Вторник";
                case 4: return "Среда";
                case 5: return "Четверг";
                case 6: return "Пятница";
                case 7: return "Суббота";
            }
        } else throw new Error("parameter should be in the range of 1 to 7");
    } else throw new Error("parameter type is not a Number");
}


console.log(f(1)); // Воскресенье
console.log(f(2)); // Понедельник
console.log(f(8)); // Error: parameter should be in the range of 1 to 7
console.log(f('1')); // Error: parameter type is not a Number