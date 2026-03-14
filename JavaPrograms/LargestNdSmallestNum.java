import java.util.Arrays;

public class LargestNdSmallestNum {
    public static void main(String[] args) {
        int[] nums = {10, 6, 30, 60, 100};
        int largest = nums[0];
        int smallest = nums[0];
        for(int i=0; i<nums.length; i++){
            if(nums[i] > largest)
            {
                largest = nums[i];
            }else if(nums[i] < smallest){
                smallest = nums[i];
            }
        }
        System.out.println(Arrays.toString(nums));
        System.out.println("Largest: " + largest);
        System.out.println("Smallest: " + smallest);
    }
}
