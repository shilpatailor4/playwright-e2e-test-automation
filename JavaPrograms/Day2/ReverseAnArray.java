package Day2;

import java.util.Arrays;

public class ReverseAnArray {
    public static void main(String[] args) {
        int nums[] = {100, 200, 300, 400, 500};

        System.out.print("Before reverse: " + Arrays.toString(nums) + " ");
        System.out.println();
        System.out.print("After reverse: ");

        for(int i=nums.length-1; i>=0; i--){
            System.out.print(nums[i] + " ");
        }
    }
}
