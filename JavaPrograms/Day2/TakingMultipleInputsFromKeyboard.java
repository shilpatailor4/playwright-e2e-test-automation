package Day2;

import java.util.Scanner;

public class TakingMultipleInputsFromKeyboard {
    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            System.out.println("Enter your first num:");
            int num1 = sc.nextInt();
            
            System.out.println("Enter your second num: ");
            int num2 = sc.nextInt();

            System.out.println("Add two num: " + (num1 + num2));

            System.out.println("Enter your name");
            String name = sc.next();
            System.out.println("name is: " + name);

            System.out.println("Enter Age:");
            int age = sc.nextInt();
            System.out.println("Age is: " + age);

            System.out.println("Enter unknown things");
            Object unkwn = sc.next();
            System.out.println("Unknown is: " + unkwn);
        }
    }
}
