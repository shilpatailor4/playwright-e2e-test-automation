package Day11;

import java.util.ArrayList;
import java.util.Iterator;

public class ArrayListDemo {
    public static void main(String[] args) {

        //Declaration
        ArrayList myList = new ArrayList<>();

        //Adding data into arraysList
        myList.add(100);
        myList.add(10.5);
        myList.add("Welcome");
        myList.add('A');
        myList.add(true);
        myList.add(100);
        myList.add(null);
        myList.add(null);

        //Size of arraylist
        System.out.println("Size of array list: " + myList.size());  //8

        //Printing arraylist
        System.out.println("Printing data from array list:: " + myList); // [100, 10.5, Welcome, A, true, 100, null, null]

        //Remove element from array list
        myList.remove(5);  // here 5 is index of element
        System.out.println(myList);

        //Insert element in the array list
        myList.add(2, "Java");
        System.out.println(myList);

        //Modufy element from the array list
        myList.set(2, "Python");
        System.out.println(myList);

        //Access specific element from the array list
        System.out.println(myList.get(3));

        //reading all the elements from the array list

        //forloop
        // for(int i=0; i<myList.size(); i++){
        //     System.out.println(myList.get(i));
        // }
        
        //using enhanced fro each loop
        // for(Object x : myList){
        //     System.out.println(x);
        // }

        //using iterator
        // Iterator<Object> it = myList.iterator();

        // while (it.hasNext()) {
        //     System.out.println(it.next());
        // }

        //Checking array list is empty or not
        System.out.println(myList.isEmpty());  //false

        //remove all the elements from the array list
        ArrayList myList2 = new ArrayList<>();
        myList2.add(100);
        myList2.add("Welcome");

        myList.removeAll(myList2);
        System.out.println("After removing multiple elements:" + myList); // [10.5, Python, A, true, null, null]

        //remove all the elements/clear
        myList.clear();
        System.out.println(myList);  //[]

        //Check the array list is empty ot not
        System.out.println(myList.isEmpty());  //true
    }
}
