let n = 1000;
let num = 0;
while(true){
    if (n >= 50){
        n = n/2;
        num++;
    } else break;
}
console.log(n);
console.log(num);