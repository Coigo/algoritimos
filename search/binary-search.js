const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function search (arr, n) {
    let low = 0
    let high = arr.length
    while (low <= high) {
        mid = low + (high- low) / 2
        
        if (arr[mid] < n) {
            low = mid + 1
        }
        else if (arr[mid] > n) {
            high = mid - 1
        }
        else return arr.indexOf(n)
    }


}

const result = search(arr, 7)
console.log(result);