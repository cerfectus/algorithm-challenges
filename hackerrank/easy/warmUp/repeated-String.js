function repeatedString(s, n) {
    const count = s => s.split('a').length - 1;
   
       let len = s.length;
       let reps = Math.floor(n / len);
       let remainder = s.slice(0,n % len);
   
       return reps * count(s) + count(remainder)
   }
   