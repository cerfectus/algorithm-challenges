/*return the number of integers that are betwen the sets.

getTotalX has the following parameter(s):

a: an array of integers
b: an array of integers */


function getTotalX(a, b) {
    // Write your code here
    let possMatch = [];
  let actualMatches = [];
  let counter;

  for (let i = 1; i <= 100; i++){
  counter = 0;
    a.forEach(function(ele){
        if (i % ele === 0){
            counter ++;
        }
    })
    if (counter === a.length){
        possMatch.push(i);
    }

  }

  possMatch.forEach(function(ele){
    counter = 0;
    b.forEach(function(item){
        if (item % ele === 0){
            counter ++;
        }
    })
    if (counter === b.length){
     actualMatches.push(ele)
    }
  })

  return actualMatches.length

}