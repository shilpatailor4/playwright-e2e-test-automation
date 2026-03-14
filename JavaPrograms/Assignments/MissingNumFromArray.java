package Assignments;

public class MissingNumFromArray {
    public static void main(String[] args) {
        // Find the missing number from the gievn array
        int nums[] = {1, 4, 5, 3};
        int n=5;
        int expectedSum = (n * (n +1)) / 2;
        System.out.println(expectedSum);
        
        int actualSum = 0;
        for(int num : nums){
            actualSum += num;
        }

        int missingNum = expectedSum - actualSum;
        System.out.println("Missing num: " + missingNum);
    }
}
