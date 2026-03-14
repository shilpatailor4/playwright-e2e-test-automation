package Assignments;

public class RemoveWhiteSpace {

    //Remove white space from the string

    public static void removeSpaces(String str){
        String replaceStr = str.replace(" ", "");
        System.out.println(replaceStr);
    }
    public static void main(String[] args) {
        String s1 = "    Shil  pa    tailo    r";
        removeSpaces(s1);
    }
}
