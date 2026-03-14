package Day3;

public class StringVsStringBufferVsStringBuilder {
    public static void main(String[] args) {
        
        //String -- immutable
        String s = "welcome";
        s.concat("to Java");
        System.out.println(s);  //immutable --cannot change original value of s

        //StringBuffer -- Mutable
        StringBuffer sbuffer = new StringBuffer("wellcome");
        sbuffer.append(" to java");
        System.out.println(sbuffer);  //mutable - can change the original value 'sbuffer'

        //StringBuilder -- mutable
        StringBuilder sb = new StringBuilder("welcome");
        sb.append(" to playwright");
        System.out.println(sb);  //mutable - we can change the original value of sb
    }
}
