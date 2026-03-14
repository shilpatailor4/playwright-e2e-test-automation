package Assignments;

public class Palindrome {

    //Check the string is palindrome or not?

    public static void isPalindromeString(String str){
          
        String revStr = "";
        for(int i=str.length()-1; i>=0; i--){
            revStr += str.charAt(i);
        }
        System.out.println("reverse string: " + revStr);
        
        if(revStr.equals(str)){
            System.out.println("String is palindrome!");
        }else{
            System.out.println("String is not palindrome");
        }

    }
    public static void main(String[] args) {

        String input = "madam";
        String input2 = "Shilpa";
        isPalindromeString(input);
        isPalindromeString(input2);
    }
}
