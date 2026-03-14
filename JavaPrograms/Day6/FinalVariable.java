package Day6;

class AB{
    final int a=100;
    void display(){
        System.out.println(a);
    }
}

public class FinalVariable {
    public static void main(String[] args) {
        
        AB ab = new AB();
        ab.a = 200;  //final value cannot change it's constant a=100;
        ab.display();
    }
}
