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