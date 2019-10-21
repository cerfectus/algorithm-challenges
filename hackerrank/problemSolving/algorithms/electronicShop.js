/*return the maximum total price for the two items within Monica's budget, or  -1 if she cannot afford both items.

getMoneySpent has the following parameter(s):

keyboards: an array of integers representing keyboard prices
drives: an array of integers representing drive prices
b: the units of currency in Monica's budget */
function getMoneySpent(keyboards, drives, s){
    
    let max = -1;

    for(let i = 0; i < keyboards.length; i++){
        var temp = 0;
        for(let j = 0; j < drives.length; j++){
            if(keyboards[i] + drives[j] <= s){
                temp = keyboards[i] + drives[j];
                max = temp > max ? temp : max;
            }
        }
    }

    return max;
}