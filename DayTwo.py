##TIME: 0(N^2)

## PYTHON SOLUTION // TIME: 0(N)
    def firstDuplicate(a):
//      #UNDERSTAND
//         #Find the first duplicate number in the array, if none return -1
//         #first occurence of the second number
//         #the first duplicate where the second occurance comes first
        
//     #PLAN
//   
//         ##FOR MORE EFFIENCICY, USE ONE POINTER, ONE FOR LOOP THROUGH THE ARRAY AND GET MIN SECOND VALUE INDEX
//         ##USE STORAGE TO SPEED UP PROCESS
//         ##HASHSET - ACCESS IS CONSTANT
        seen = set()
        
        for i in a:
            if i in seen:
               return i;
          else:
              seen.add(i);
        
        return -1;


##/******FIRST NONREPEATING CHARACTER (PYTHON) *********/

def firstNotRepeatingCharacter(s):
    ##can use a dict to store chars, if frequency is more than 1 then its not a non repeating char,
    ##if frequency is only 1 and it appears first then it is a non repeating char. 
    # loop through the string once,
    # when a new character is found, add it to counts dict, and append it to char_order
        #list
    #When its a repeated character, increment the value of counts by 1
    # we loop through char_order until we find a character with a value of 1 in char_order
    #return it.


    char_order = []
    char_counts = {}

    #for loop to iterate through list
    for char in s:
        #if the char is in the dict, increment its value
        if char in char_counts:
            char_counts[char] += 1
        #if not, frequency is 1, append it to the char order
        else:
            char_counts[char] = 1
            char_order.append(char)
        #iterate through char order, if the frequency is 1, that is the char to return
    for char in char_order:
        if char_counts[char] == 1:
            return char
    return "_"


### ROTATE IMAGE (2D ARRAY, ROTATE 90 DEGREES CLOCKWISE) ### 
def rotateImage(a):
    ##loop through rows and columns and switch 
    