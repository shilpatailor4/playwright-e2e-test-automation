import java.util.HashMap;

public class OccuranceOfWords {
    public static void main(String[] args) {
        String str = "I am learning java and learning java programming";

        HashMap<String, Integer> maps = new HashMap<String, Integer>();

        Integer count = 1;

        String[] arr = str.split(" ");

        for(int i=0; i<arr.length; i++){
            if(!maps.containsKey(arr[i])){
                maps.put(arr[i], count);
            }else{
               maps.put(arr[i], maps.get(arr[i])+1);
            }
        }

        for(String x : maps.keySet()){
            System.out.println("The count of words: " + x +" = " + maps.get(x));
        }
       

    }
}
