package Day3;

import java.util.Arrays;

public class MutablevsImmutable {
    public static void main(String[] args) {
        //Mutable - can change
        int a[] = {20, 30, 10, 50, 40};
        System.out.println(Arrays.toString(a));
        Arrays.sort(a);  //mutable -- we can change
        System.out.println(Arrays.toString(a));

        //Immutable -- we can not change
        String s = new String("welcome");
        System.out.println(s);   //welcome
        String concatString = s.concat("to java");
        System.out.println(s);  //immutable - we cnannot change 'welcome'
        System.out.println(concatString);
    }
}
