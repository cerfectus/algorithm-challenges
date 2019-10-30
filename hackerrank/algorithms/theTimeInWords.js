/* return a time string as described.

timeInWords has the following parameter(s):

h: an integer representing hour of the day
m: an integer representing minutes after the hour */
function timeInWords(h, m) {
    let numbers = [
        'zero',
        'one', 'two', 'three', 'four', 'five',
        'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
        'sixteen', 'seventeen', 'eightteen', 'nineteen', 'twenty',
        'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five',
        'twenty six', 'twenty seven', 'twenty eight', 'twenty nine'
      ]
    
      if (m === 0) {
        return numbers[h] + " o' clock"
      }
    
      let result = ''
    
      if (m % 30 === 0) {
        result += 'half'
      } else if (m % 15 === 0) {
        result += 'quarter'
      } else {
        let minutes = m < 30 ? numbers[m] : numbers[60 - m]
        result += minutes
    
        result += m % 15 === 1 ? ' minute' : ' minutes'
      }
    
      if (m < 31) {
        result += ' past '
      } else {
        result += ' to '
        h++
      }
    
      result += numbers[h]
    
      return result
        
    }