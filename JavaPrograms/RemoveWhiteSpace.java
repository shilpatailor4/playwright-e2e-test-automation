public class RemoveWhiteSpace {

    public static String revSpaces(String str){
        String updatedString = str.replaceAll("\\s", "");
        return updatedString;
    }

    public static void main(String[] args) {
        
        String str1 = "Shilpa Tailor     Love Java   ";
        String out1 = revSpaces(str1);
        System.out.println("Updated String: " + out1);

    }
    
}
