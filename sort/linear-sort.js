const arr = [3,5,1,7,0,2,8,4,6]

for ( let i = 0; i < arr.length; i++ ) {
    let j = i
    while ( j > 0 && arr[j - 1] > arr[j] ) {
        let toSwap = arr[j]
        arr[j] =  arr[j -1]
        arr[j-1] =  toSwap
        
        j = j - 1 
    }
} 
console.log(arr);