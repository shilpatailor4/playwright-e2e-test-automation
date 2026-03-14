package Assignments;

public class SumOfEle {
    public static void main(String[] args) {
        int sum = 0;
        int num[] = {1, 2, 3, 4, 5};

        for(int i=0; i<num.length; i++){
            sum += num[i];
        }
        System.out.println("Total sum is: " + sum);       
    }
    
}
