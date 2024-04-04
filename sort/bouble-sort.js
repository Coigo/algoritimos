const arr = [ 3,6,1,7,6,5,8]

// for ( let i = 1; i< arr.length; i++ ) {
//     for ( let j = 0; j < arr.length - 1; j ++ ) {
//         if (arr[j] > arr[j + 1]) {
//             let toSwap = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] =  toSwap
//         }
//     }
// }

console.log(arr);
for ( let i = 1; i < arr.length; i ++ ) {
    console.log('>>> i = ', i, arr[i]);
    for ( let j = 0; j < arr.length - 1; j++ ) {
        if (arr[j] > arr[j + 1]) {
            let toSwap = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] =  toSwap
        }
    }
}

console.log(arr);

// i = indice que ta sendo validado
// j = indices que estao atras do i 