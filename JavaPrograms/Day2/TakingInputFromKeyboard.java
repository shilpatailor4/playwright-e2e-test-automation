package Day2;

import java.util.Scanner;

public class TakingInputFromKeyboard {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        //Integer
        // System.out.println("Enter your num:");
        // int num = sc.nextInt();
        // System.out.println("Given num is: " + num);

        //floating point number
        // System.out.println("Enter your double num: ");
        // double numD = sc.nextDouble();
        // System.out.println("Given num is: " + numD);

        //String
        System.out.println("Enter your city");
        String cityName = sc.next();
        System.out.println("Your City: " + cityName);
    }
}
