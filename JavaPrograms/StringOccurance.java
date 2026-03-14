import java.util.HashMap;
import java.util.Map;

public class StringOccurance {
    public static void main(String[] args) {
        String str = "bitterr";

        //1. Convert string to char array
        char[] charArray = str.toCharArray();

        //2. Map to store char array and its count
        HashMap<Character, Integer> maps = new HashMap<>();

        //for each loop for each characters
        for(char ch : charArray){
            if(maps.containsKey(ch)){
                //if char is present then count +1
                maps.put(ch, maps.get(ch)+1);
            }else{
                //if char is not present then put 1 
                maps.put(ch, 1);
            }
        }

        //printing the occurances
        System.out.println("String occurances " + str + " : ");
        for(Map.Entry<Character, Integer> entry : maps.entrySet()){
            System.out.println(entry.getKey() + " : " + entry.getValue());
        }
    }
}
