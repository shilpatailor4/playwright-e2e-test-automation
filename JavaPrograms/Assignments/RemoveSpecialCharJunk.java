package Assignments;

public class RemoveSpecialCharJunk {

    //Remove junk and sepecial characters in a string

    public static void removeJunk(String str){

        String repStr = str.replaceAll("[^a-zA-Z0-9 ]", "");
        System.out.println(repStr);

    }
    public static void main(String[] args) {
        String originalString = "Hello @ World! 123 #$%";
        String s = "Hello @#$123 %^& World! *";
        removeJunk(originalString);
        removeJunk(s);
    }
}
