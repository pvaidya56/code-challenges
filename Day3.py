### -- Palindrome Number -- ###

class Solution:
    def isPalindrome(self, x: int) -> bool:
        #if the number is a Palindrome return true else return false
        tempNum = x
        reversedNum = 0
        
        while (tempNum > 0):
            ##moves the last number to the ones place
            lastDigit = tempNum%10
            reversedNum = (reversedNum * 10) + lastDigit
            tempNum = tempNum // 10
            
        if(x == reversedNum):
            return True
        else:
            return False

