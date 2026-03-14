public class ReverseWordString{

    public static String revStrWord(String str){
         String words[] = str.split(" ");
         StringBuilder revStr = new StringBuilder();

         for(String word : words){
            StringBuilder sb = new StringBuilder(word);
            sb.reverse();

            revStr.append(sb).append(" ");
         }
         return revStr.toString().trim();
    }
    public static void main(String[] args) {
        
        String str1 = "Hello SHilpa";
        String str2 = "abc xyz";
        String str3 = "I love Selenium Java";

        String out1 = revStrWord(str1);
        String out2 = revStrWord(str2);
        String out3 = revStrWord(str3);

        System.out.println("Reverse String are words reverse:");
        System.out.println(out1);
        System.out.println(out2);
        System.out.println(out3);
    }
}