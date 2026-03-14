package Assignments;

import java.util.Arrays;

public class SortingElements {
    public static void main(String[] args) {
        //sorting element using for loop

        int num[] = {50, 20, 10, 40, 100};

        for(int i=0; i<num.length; i++){
            for(int j=0; j<num.length-1-i; j++){
               if(num[j] > num[j+1]){
                int temp = num[j];
                num[j] = num[j+1];
                num[j+1] = temp;
               }
            }
        }

        System.out.println("Sorted array: " + Arrays.toString(num));

    }
}
