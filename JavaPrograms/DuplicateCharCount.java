import java.util.HashMap;
import java.util.Set;

public class DuplicateCharCount {

    static void stringCharCount(String str) {

        HashMap<Character, Integer> charCountMap = new HashMap<Character, Integer>();

        char[] charArray = str.toCharArray();

        for (char ch : charArray) {
            if (charCountMap.containsKey(ch)) {
                charCountMap.put(ch, charCountMap.get(ch) + 1);
            } else {
                charCountMap.put(ch, 1);
            }
        }

        Set<Character> charString = charCountMap.keySet();
        System.out.println("Duplicate char in string: " + str);

        for (Character c : charString) {
            if (charCountMap.get(c) > 1) {
                System.out.println(c + " : " + charCountMap.get(c));
            }
        }

    }

    public static void main(String[] args) {
        stringCharCount("JavaJ2EE");

        stringCharCount("Fresh Fish");

        stringCharCount("Better Butter");
    }
}
