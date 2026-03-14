package Day11;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;

public class HashSetDemo {
    public static void main(String[] args) {

        //Declaration
        HashSet mySet = new HashSet<>();

        //add values from the array list
        mySet.add(100);
        mySet.add(10.5);
        mySet.add("Welcome");
        mySet.add('A');
        mySet.add(null);
        mySet.add(100);
        mySet.add(null);
        mySet.add(100);
        mySet.add(true);

        //Printing hash set
        System.out.println(mySet);

        //Size of hash llist
        System.out.println(mySet.size());  //6

        //Removing element
        mySet.remove(10.5); // 10.5 is the value // not an index  [null, A, 100, Welcome, true]

        //Inserting element   --- Not allowed
        //Access specific element -- Not allowed

        //Convert HashSet into ArrayList
        ArrayList al = new ArrayList<>(mySet);
        System.out.println(al.get(3));

        //Read all the element using for..each loop
        // for(Object x : mySet){
        //    System.out.println(x);
        // }

        //Read all the elements using iterator
        Iterator it = mySet.iterator();
        while (it.hasNext()) {
            System.out.println(it.next());  
        }

        //Clear all the elements from the arra list
        mySet.clear();
        System.out.println(mySet);

        //Check the array list is empty oor not
        System.out.println(mySet.isEmpty());  //true

    }
}
