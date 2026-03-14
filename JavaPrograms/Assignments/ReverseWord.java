package Assignments;

public class ReverseWord {
    public static void main(String[] args) {
        String str = "welcome to java";

        //1. split the string
        String split[] = str.split(" ");

        //2. add string buffer
        StringBuffer sb = new StringBuffer();

        //3. Strore each value for loop
        for(String s : split){
         StringBuffer sBuffer = new StringBuffer(s);
         sBuffer.reverse();
         sb.append(sBuffer).append(" ");
        }

        System.out.println(sb.toString().trim());
    }
}
