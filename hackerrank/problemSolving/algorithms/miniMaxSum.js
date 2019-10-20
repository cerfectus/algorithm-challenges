function miniMaxSum(arr) {
    const sorted = arr.sort()
     
    const min = sorted.slice(0,4).reduce((a,b)=> a +b);
      
    const max = sorted.slice(1,5).reduce((a,b) => a+b)
      
    console.log(min, max)
}