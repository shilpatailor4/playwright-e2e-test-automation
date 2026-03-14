package Assignments;

public class ReverseString {
    public static void main(String[] args) {
      /*  String str = "welcome to java";
        String revStr = "";

        for(int i=str.length()-1; i>=0; i--){
            revStr += str.charAt(i);
        }

        System.out.println(revStr);

         */

        //Approach2 - converting string into charArray
     /*   String s = "welcome";
        String rev = "";

        char[] ch = s.toCharArray();

        for(int i=ch.length-1; i>=0; i--){
            rev = rev + ch[i];
        }

        System.out.println("reverse a string: " + rev);
        */ 

        //Approach 3 -- StringBuffer class
        StringBuffer s = new StringBuffer("welcome");
        System.out.println(s.reverse());

        //Approach 4 -- StringBuilder class
        StringBuilder s1 = new StringBuilder("Java");
        System.out.println(s1.reverse());


    }
}
