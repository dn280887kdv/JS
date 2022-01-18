let arr = [6,5,4,3,2,1];
let mas = [];
for(let i = 0; i < arr.length; i++) {
    for(let j = i; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    mas.push(arr[i]);
}
console.log(mas);