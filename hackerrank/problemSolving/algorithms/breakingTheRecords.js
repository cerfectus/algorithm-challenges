//return an integer array containing the numbers of times she broke her records. Index  is for breaking most points records, and index  is for breaking least points records.
//breakingRecords has the following parameter(s):
//scores: an array of integers


function breakingRecords(scores) {
    let max = scores[0];
    let min = scores[0];
    let countMax = 0;
    let countMin = 0;
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > max) {
            max = scores[i];
            countMax++
        }
        if (scores[i] < min) {
            min = scores[i];
            countMin++
        }
    }
    return [countMax, countMin]
}
//both of them work
function breakingRecords(scores){
 
// Preparing variables
let [ hi, lo ] = [ scores[0], scores[0] ];
let [ max, min ] = [ 0, 0 ];

// Calculating
for (let i = 1; i < scores.length; i++) {
	if (scores[i] > hi) {
        hi = scores[i]; max++; }
	if (scores[i] < lo) { 
        lo = scores[i]; min++; }
}

//Returning
return [ max, min ];   
}


   