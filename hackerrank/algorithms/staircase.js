//print a staircase as described above.
//staircase has the following parameter(s):
//n: an integer
function staircase(n){
    let i = 1;
    let space = n - 1
    while(i <= n){
        console.log(("".repeat(space))+("#").repeat(i))
        i++;
        space--
    }
}
staircase(5)