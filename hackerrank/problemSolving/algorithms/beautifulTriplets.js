/* It must return an integer that represents the number of beautiful triplets in the sequence.

beautifulTriplets has the following parameters:

d: an integer
arr: an array of integers, sorted ascending */

function beautifulTriplets(d, arr) {
    let count = 0;
    for(let i = 0; i < arr.length - 2; i++){
      
      for(let j = i + 1; j < arr.length - 1; j++){
        if(arr[j] - arr[i] === d){
          for(let k = j + 1; k < arr.length; k++){
            if(arr[k] - arr[j] === d){
              console.log(arr[i])
              count++
              break
            }
          }
        }
      }
    }
    return count
    
}