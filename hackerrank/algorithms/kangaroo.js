/*return YES if they reach the same position at the same time, or NO if they don't.

kangaroo has the following parameter(s):

x1, v1: integers, starting position and jump distance for kangaroo 1
x2, v2: integers, starting position and jump distance for kangaroo 2 */
function kangaroo(x1, v1, x2, v2) {
let result = "NO"
for(let i = 0; i < 10000 && result == "NO"; i++){
    if(x1 + v1 * i == x2 + v2 *i){
        result = "YES"
    }
}
return result
}