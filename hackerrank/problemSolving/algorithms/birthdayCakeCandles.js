//return an integer representing the number of candles she can blow out.
//birthdayCakeCandles has the following parameter(s):
//ar: an array of integers representing candle heights

function birthdayCakeCandles(ar) {
let count = 0;
let numMax = Math.max(...ar)

for(let i = 0;i<ar.length;i++){
  if(ar[i] === numMax){
    count++
  }
}
return count
}