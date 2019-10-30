/*return an integer representing the number of digits of  that are divisors of .

findDigits has the following parameter(s):

n: an integer to analyze*/

function findDigits(n) {
    let count = 0;
    let number = n.toString().split("")    
    
    number.forEach(digit => {
        if(n % parseInt(digit) === 0){
            count++
        }
    })
        return count
    }