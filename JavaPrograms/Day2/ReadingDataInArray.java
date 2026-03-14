package Day2;

import java.util.Scanner;

public class ReadingDataInArray {
    public static void main(String[] args) {
        int a[] = new int[5];

        Scanner sc = new Scanner(System.in);

        for(int i=0; i<a.length; i++){
            System.out.println("Enter the number with position " + i + " ");
            a[i]++;
            int num = sc.nextInt();
            System.out.println("Given num: " + num);
        }

    }
}
