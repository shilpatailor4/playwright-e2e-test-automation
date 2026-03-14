package Assignments;

import java.util.HashMap;

public class WordCounts {
    public static void main(String arg[]){
        String str = "Welcome to java java programming";
        String[] arr = str.split(" ");
        Integer count =1;
        HashMap<String, Integer> map = new HashMap<String, Integer>();
        for(int i=0; i<arr.length; i++){
            if(!map.containsKey(arr[i])){
                map.put(arr[i], count);
            }else{
                map.put(arr[i], map.get(arr[i])+1);
            }
        }
        for(String x : map.keySet()){
            System.out.println(x + " = " + map.get(x));
        }
   
    }
}
