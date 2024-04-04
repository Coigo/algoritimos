// eu nao sei o nome desse algoritimo

function search (search) {
    const arr = [1,2,3,4,5,6,7,8,9]
    for ( let i = 0; i < arr.length; i= i+2 ) {
        if ( arr[i] == search ) {
            return arr[i]
        }
        else if ( arr[i] > search ) {
            return arr[i -1]
        }
    } 
}

console.log(search(6));