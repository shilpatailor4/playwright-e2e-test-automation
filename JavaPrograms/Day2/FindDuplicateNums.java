package Day2;

import java.util.HashSet;

public class FindDuplicateNums {
    public static void main(String[] args) {
        int nums[] = {10, 20, 30, 20, 40, 50, 10};
        HashSet<Integer> duplicate = new HashSet<>();

        System.out.println("Duplicate numbers: ");
        for(int num : nums){
            if(!duplicate.add(num)){
                System.out.print(num + " ");
            }
        }
    }
}
