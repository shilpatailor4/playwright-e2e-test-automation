package Day11;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map.Entry;

public class HashMapDemo {
    
    public static void main(String[] args) {
        
        //Declaraion
        HashMap<Integer, String> hm = new HashMap<Integer, String>();

        //Adding pairs
        hm.put(101, "Jhon");
        hm.put(102, "Shilpa");
        hm.put(103, "Scott");
        hm.put(104, "Marry");
        hm.put(102, "David");

        //Printing data
        System.out.println("Printing all map data: " + hm); // {101=Jhon, 102=David, 103=Scott, 104=Marry}

        //Find the size of map
        System.out.println("Size of elements: " + hm.size());  //4

        //remove pair
        hm.remove(104);  //104 is the key of the pair
        System.out.println("After removing from pair: " +hm);  // {101=Jhon, 102=David, 103=Scott}

        //access value of key
        System.out.println(hm.get(102));  //David

        //Get all the keys from the hash map
        System.out.println(hm.keySet());  // [101, 102, 103]

        //Get all the values from the hash map
        System.out.println(hm.values());  // [Jhon, David, Scott]

        //Get all the keys and values from the map list
        System.out.println(hm.entrySet()); // [101=Jhon, 102=David, 103=Scott]

        //Reading data from hash map

        //using for.. each loop
        // for(int k : hm.keySet()){
        //     System.out.println(k + "      " + hm.get(k));
        // }

        //Using iterator();
         Iterator<Entry<Integer, String>> it = hm.entrySet().iterator();
         while (it.hasNext()) {
            Entry<Integer, String> entry = it.next();
            System.out.println(entry.getKey() + "   " + entry.getValue());
         }

         //clear() all the data
         hm.clear();
         System.out.println(hm);  // []

         //check the map list is empty or not
         System.out.println(hm.isEmpty());  //true


    }
}
