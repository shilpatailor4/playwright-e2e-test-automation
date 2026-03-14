package Assignments;

import java.util.HashMap;
import java.util.Map;

public class OccuranceOfChars {
    //Find the occurance of a characters in a string
     
    public static void stringOccurance(String str){

        //1. Convert String to char Array
        char[] charArray = str.toCharArray();

        //2. Map to store Character and its Count
        HashMap<Character, Integer> map = new HashMap<>();

        //2. Loop through each characters
        for(char ch : charArray){
            if(map.containsKey(ch)){
                //If character is present, increment count
                map.put(ch, map.get(ch)+1);
            }else{
               // If character is not present, add it with 1
               map.put(ch, 1);
            }
        }

        // Printing the occurrences
        System.out.println("Character occurrences in " + str + ":");
        for(Map.Entry<Character, Integer> entry : map.entrySet()){
            System.out.println(entry.getKey() + " : " + entry.getValue());
        }
    }

    public static void main(String[] args) {
        String s = "programming";
        String s1 = "bitter butter";
        stringOccurance(s);
        System.out.println(".....................");
        stringOccurance(s1);
    }
}
