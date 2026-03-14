package Day3;

import java.util.Arrays;

public class StringMethods {
    public static void main(String[] args) {
        //Using string lierial 
        String s  = "Welcome";

        //String create using new keywrod
        // String s = new String("Welcome");

        //length() -- returns length of a string(number of characters)
        int len = s.length();
        System.out.println("Length of string: " + len);

        //concat() -- joining strings
        String s1 = "Shilpa";
        String s2 = "tailor";
        String s3 = "Thada";

        System.out.println("Both strings are: " + s1.concat(s2).concat(s3));

        //trim() -- remove spaces between right and left side
        String s4 = "   Welcome   ";
        System.out.println("Before trmming length: " + s4.length());
        System.out.println(s4.trim());
        System.out.println("After trmming length: " + s4.trim().length());

        //charAt() -- returns a characters from a string based on index
        System.out.println(s.charAt(3));

        //contains() -- return true/false
        //check string is part of main string or not
        System.out.println(s.contains("Wel"));  //true
        System.out.println(s.contains("wel"));  //false bcz 'w' us small

        //equals(), equalsIngnoreCase()  -- compare strings
        s1 = "welcome";
        s2 = "welcome";
        System.out.println(s1 == s2);   //true
        System.out.println(s1.equals(s2));   //true
        System.out.println(s1.equals("Welcome"));   //false
        System.out.println(s1.equalsIgnoreCase("Welcome"));  //true

        //replace() -- replace single/multiple/sequence of chharacters in a strings
        s = "welcome to selenium java selenium python selenium c#";
        s.replace("e", "O");
        System.out.println(s.replace("e", "O"));
        System.out.println(s.replace("selenium", "playwright"));

        //substring() - extract substring from the main string
        s = "welcome";
        System.out.println(s.substring(0,3)); //wel
        System.out.println(s.substring(3, 6)); //com

        //toUpperCase(), toLowerCase()
        s = "Welcome";
        System.out.println(s.toUpperCase()); //WELCOME
        System.out.println(s.toLowerCase());  //welcome

        //split() -- plit the string into multiple parts based on delimeter
         s = "abc@gmail.com";
         String a[] = s.split("@");
         System.out.println(a[0]);   //abc
         System.out.println(a[1]);   //@gmail.com

         System.out.println(Arrays.toString(a));  //[abc, gmail.com]

         s1 = "shilpa tailor thada and java";
         String str[] = s1.split(" ");
         System.out.println(Arrays.toString(str));
 
         String rev = "";
         for(int i=str.length-1; i>=0; i--){
             rev += str[i];
         }

         System.out.println(rev);
    }
}

