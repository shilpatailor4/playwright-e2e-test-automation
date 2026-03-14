package Day3;

public class StringComparision {
    public static void main(String[] args) {
        //case1:
        String s1 = "welcome";
        String s2 = "welcome";

        System.out.println(s1 == s2);  //true
        System.out.println(s1.equals(s2));  //true

        //Case2:
        String s3 = new String("welcome");
        String s4 = new String("welcome");

        System.out.println(s3 == s4); //false -- to compare the object
        System.out.println(s3.equals(s4)); //true -- to compare the value of objects

        //Case3:
        String s5 = "abc";
        String s6 = new String("abc");

        System.out.println(s5 == s6);  //false
        System.out.println(s5.equals(s6)); //
        
        //Case4:
        String s7 = "welcome";
        String s8 = new String("welcome");
        String s9 = s8;

        System.out.println(s7==s8);
        System.out.println(s8 == s9);

    }
}
