function findLongestWordLength(str) {
    let currentLength = 0;
    let longestLength = 0;
   
    for(let i = 0; i < str.length; i++) {
       if (str[i] === " ") {
         if (currentLength > longestLength) {
           longestLength = currentLength;
         }
         currentLength = 0
   }else { 
     currentLength++;
    }
      }
      if (currentLength > longestLength) {
        longestLength = currentLength;
      }
      return longestLength;
   
   }