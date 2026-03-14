package Day2;

import java.util.Arrays;

public class SortingStrings {
    public static void main(String[] args) {
        // String str[] = {"A", "C", "B", "E", "D"};
        String str[] = {"scott", "marry", "john", "david", "shilpa"};

        System.out.println("Before sorting.. " + Arrays.toString(str));

        Arrays.sort(str);

        System.out.println("After sorting.. " + Arrays.toString(str));
    }
}
