package Day9;

public class CheckedExceptions {
    public static void main(String[] args) throws InterruptedException {
        System.out.println("Prgram started...");
        System.out.println("program in progress state..");

        /* try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }   */

       Thread.sleep(5000);

        System.out.println("Program is completed");
        System.out.println("program is existed");
    }
    
}
