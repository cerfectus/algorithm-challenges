/* return an integer denoting the number of ways Lily can divide the chocolate bar.

birthday has the following parameter(s):

s: an array of integers, the numbers on each of the squares of chocolate
d: an integer, Ron's birth day
m: an integer, Ron's birth month */

function birthday(s, d, m) {
var ways = 0,
        i = 0,
        sum = 0,
        j = 0,
        index = 0;
    if(s.length === 1 && s[0] === d){
      return 1;
    }
    for(i = 0; i < s.length - (m -1); i++){
      sum = 0;
      index = i;
      for(j = 0; j < m; j++){
        sum += s[index++]
      }
      if(sum === d){
        ways++;
      }
    }
    return ways;

}
