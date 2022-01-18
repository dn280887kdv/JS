let arr = [1,2,3,4,5,6];
let mas = [];
for(let i = 0; i < arr.length; i++) {
    for(let j = i; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    mas.push(arr[i]);
}
console.log(mas);