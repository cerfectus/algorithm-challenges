/* return an integer representing the fine due.

libraryFine has the following parameter(s):

d1, m1, y1: returned date day, month and year
d2, m2, y2: due date day, month and year */
function libraryFine(d1, m1, y1, d2, m2, y2) {
    if (y1 === y2 && m1 === m2 && d1 > d2) {
       return (15 * (d1 - d2));
   } else if (y1 === y2 && m1 > m2) {
       return (500 * (m1 - m2));
   } else if (y1 > y2) {
       return 10000;
   } else if (y1 <= y2 || m1 <= m2 || d1 <= d2) {
       return 0;
   }

}