// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    //delare a variable to hold the count for pairs
     let pairs = 0;
      //sort the array
     ar.sort();
     //iterate through the array
     for(let i = 0; i < n; i++){
         //check if they are equal
         if (ar[i] == ar[i + 1]){
             //increment pointer
             i++;
             //increment pair count
             pairs++;
         }
     }
     //return pairs
     return pairs;
 }

 sockMerchant(9,
    [10, 20, 20, 10, 10, 30, 50, 10, 20]);

// ** For faster time complexity ** //

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    //declare an object to store the array, for faster time 
    let arObj = {};
    //delare a variable to hold the count for pairs
     let pairs = 0;
     //iterate through the array
     for(let i = 0; i < n; i++){
         //check if index is already in obj, if so then it is a pair
         if (arObj.hasOwnProperty(ar[i])){
             pairs++
             delete arObj[ar[i]];
         }
         else {
             arObj[ar[i]] = 0;
         }
     }
     //return pairs
     return pairs;
 }
 sockMerchant(9,
    [10, 20, 20, 10, 10, 30, 50, 10, 20]);
