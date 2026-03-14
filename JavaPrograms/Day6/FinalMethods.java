package Day6;

class XY{
    final void display(int x){
        System.out.println(x);
    }
}

class XZ extends XY{
    void display(int x){      // Cannot override the final method from XY class
        System.out.println(x*x);
    }
}

public class FinalMethods {
    public static void main(String[] args) {
        
    }
}
