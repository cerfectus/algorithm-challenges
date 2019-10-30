/*print the number of apples and oranges that land on Sam's house, each on a separate line.

countApplesAndOranges has the following parameter(s):

s: integer, starting point of Sam's house location.
t: integer, ending location of Sam's house location.
a: integer, location of the Apple tree.
b: integer, location of the Orange tree.
apples: integer array, distances at which each apple falls from the tree.
oranges: integer array, distances at which each orange falls from the tree.
*/

    //using reduce
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  
    console.log( apples.reduce((sum, d) => sum + (s - a <= d && d <= t - a), 0));
    console.log(oranges.reduce((sum, d) => sum + (s - b <= d && d <= t - b), 0));
    
}
    //using filter
function countApplesAndOranges(s, t, a, b, apples, oranges) {
   
    console.log( apple.filter(d => s - a <= d && d <= t - a).length);
    console.log(orange.filter(d => s - b <= d && d <= t - b).length);
    
}
