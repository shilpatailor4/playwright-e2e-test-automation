package Day2;

public class SearchingElementInArray {
    public static void main(String[] args) {

        //Search an element in an array -- linear search

        int a[] = {10, 20, 30, 40, 50};
        int search_element = 30;
        boolean status = false;   //false - not found, true - found
        for(int arr : a){
            if(arr == search_element){
                // System.out.println("ele present!");
                status = true;
                break;
            }
        }

        if(status == true){
           System.out.println("Ele present!");
        }else{
            System.out.println("Ele not present!");
        }
        
    }
}
