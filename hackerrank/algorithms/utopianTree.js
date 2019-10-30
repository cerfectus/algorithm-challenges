//Complete the utopianTree function in the editor below. It should return the integer height of the tree after the input number of growth cycles.
//utopianTree has the following parameter(s):
//n: an integer, the number of growth cycles to simulate
function utopianTree(n) {
    let i = 1, heigth = 1;
    while (i <= n) {
        if (i % 2 == 0) {
            heigth += 1;
        } else {
            heigth *= 2
        }
        i++
    }
    return heigth

}