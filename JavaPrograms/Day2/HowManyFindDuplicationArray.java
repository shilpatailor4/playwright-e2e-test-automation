package Day2;

public class HowManyFindDuplicationArray {
    public static void main(String[] args) {
        int nums[] = {100, 200, 100, 300, 400, 100, 500, 100};
        int num = 100;
        int count = 0;

        for(int n : nums){
            if(n == num){
                count++;
            }
        }

        System.out.println("num reapet count: " + count);
    }
    
}
