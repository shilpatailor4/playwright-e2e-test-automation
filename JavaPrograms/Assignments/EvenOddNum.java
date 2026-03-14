package Assignments;

public class EvenOddNum {
    public static void main(String[] args) {
        int nums[] = {1, 2, 3, 4, 5, 6};

        //find the nums even or add
        //    for(int n : nums){
        //     if(n % 2 == 0){
        //         System.out.print("even: " + n + " ");
        //     }else{
        //         System.out.print("odd: " + n + " ");
        //     }
        //    }

        //find the count how many even and odd nums
        int evenCount = 0;
        int oddCount = 0;

        for(int n : nums){
            if(n % 2 == 0){
                evenCount++;
            }else{
                oddCount++;
            }
        }

        System.out.println("Even num count: " + evenCount);
        System.out.println("Odd num count: " + oddCount);
    }
    
}
