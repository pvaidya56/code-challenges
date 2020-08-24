function firstDuplicate(a) {
    /*UNDERSTAND
       #Find the first duplicate number in the array, if none 
       return -1
       #first occurence of the second number
       #the first duplicate where the second occurance comes               first
       
   #PLAN
       #2 pointers one can loop through the array and keep                track of min index 
       # 1 - i, 2 - i+1 */
   let min_second_index = a.length
   
   for (let i = 0; i < a.length; i++) {
       for (let j = i + 1; j < a.length; j++) {
           //if a duplicate is found
           if (a[i] === a[j]) {
               min_second_index = Math.min(min_second_index, j);
           }
       }
   }
   if(min_second_index === a.length) return -1
   else return a[min_second_index];
       
}
//TIME: 0(N^2)

// // PYTHON SOLUTION // TIME: 0(N)
// def firstDuplicate(a):
//      #UNDERSTAND
//         #Find the first duplicate number in the array, if none return -1
//         #first occurence of the second number
//         #the first duplicate where the second occurance comes first
        
//     #PLAN
//   
//         ##FOR MORE EFFIENCICY, USE ONE POINTER, ONE FOR LOOP THROUGH THE ARRAY AND GET MIN SECOND VALUE INDEX
//         ##USE STORAGE TO SPEED UP PROCESS
//         ##HASHSET - ACCESS IS CONSTANT
        
//         seen = set()
        
//         for i in a:
//             if i in seen:
//                 return i;
//             else:
//                 seen.add(i);
        
//         return -1;
