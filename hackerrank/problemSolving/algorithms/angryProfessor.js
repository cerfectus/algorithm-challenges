/* return YES if class is cancelled, or NO otherwise.

angryProfessor has the following parameter(s):

k: the threshold number of students
a: an array of integers representing arrival times */

function angryProfessor(k, a) {
 const t = a.filter(i => i <= 0)
  
 return t.length >= k ? 'NO' : 'YES'

}