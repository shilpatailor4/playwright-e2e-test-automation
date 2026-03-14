package Day2;

import java.util.Arrays;

public class SortingElementInArray {
    public static void main(String[] args) {

        int nums[] = {100, 200, 500, 300, 600, 400};

        System.out.println("Before sorting array");
        System.out.println(Arrays.toString(nums));

        System.out.println("After sorting array");
        Arrays.sort(nums);
        System.out.println(Arrays.toString(nums));
        
    }
    
}
