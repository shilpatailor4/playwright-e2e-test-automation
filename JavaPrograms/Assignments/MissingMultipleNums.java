package Assignments;

import java.util.HashSet;

public class MissingMultipleNums {
    public static void main(String[] args) {
        int nums[] = {1, 3, 5, 7, 9, 10};
        int rangeEnd = 10;

        //set
        HashSet<Integer> set = new HashSet<>();
        for(int num : nums){
            set.add(num);
        }

        for(int i=1; i<=rangeEnd; i++){
            if(!set.contains(i)){
                System.out.print(i + " ");
            }
        }

    }
}
