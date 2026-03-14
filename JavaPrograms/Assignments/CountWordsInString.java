package Assignments;

import java.util.Arrays;

public class CountWordsInString {
    public static void main(String[] args) {
        String str = "Welcome to the java and playwright";

        //split
        String split[] = str.split(" ");
        System.out.println(Arrays.toString(split));

        System.out.println(split.length);

        
    }
}
