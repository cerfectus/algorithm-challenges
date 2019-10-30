/* return the number of chocolates Bobby can eat after taking full advantage of the promotion.

chocolateFeast has the following parameter(s):

n: an integer representing Bobby's initial amount of money
c: an integer representing the cost of a chocolate bar
m: an integer representing the number of wrappers he can turn in for a free bar */
function chocolateFeast(n, c, m) {
    let count = 0;
    let value = Math.floor(n / c);
    
    while(true){
        let focus = value + (count % m);
        
        count += value
        
        if(focus < m) break
        
        value = Math.floor(focus / m);
    }
    return count
}