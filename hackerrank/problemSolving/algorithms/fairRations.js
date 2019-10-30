/* return an integer that represents the minimum number of loaves required.

fairRations has the following parameter(s):

B: an array of integers that represent the number of loaves each persons starts with .
*/
function fairRations(B) {
    let count = 0;
    
        let checkAllEven = arr => {
            let checkArrEven = arr.filter(num => num % 2 === 0).length;
            return checkArrEven === arr.length;
        };
    
        let checkSumOfArr = arr => {
            return arr.reduce((a, b) => a + b) % 2 === 0;
        };
    
        while (!checkAllEven(B) && checkSumOfArr(B)) {
            let addOne = false;
            let newArr = B.map((number, index) => {
                let num = addOne ? number + 1 : number;
                if (num % 2 === 0) {
                    addOne = false;
                    return num;
                }
                count += 2;
                addOne = true;
                return num + 1;
            });
            B = newArr;
        }
        return checkSumOfArr(B) === false ? 'NO' : count;
        
}