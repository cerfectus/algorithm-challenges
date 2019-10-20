// return an integer representing the number of matching pairs of socks that are available.
//sockMerchant has the following parameter(s):
//n: the number of socks in the pile
//ar: the colors of each sock
function sockMerchant(n, ar){
    let sorted = ar.sort((a,b) => a - b);
    let pairs = 0;

    for(let i = 0; i <n-1;i++){
        if(sorted[i] === sorted [i+1]){
            pairs++
            i+=1
        }
    }
    return pairs
}
let sorted = ar.sort((a,b)=> a - b);
  let pairs = 0;

  for(let i = 0;i<n-1;i++){
    if(sorted[i] === sorted[i+1]){
      pairs++
      i+=1
    }
  }
  return pairs