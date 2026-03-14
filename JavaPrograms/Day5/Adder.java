package Day5;

public class Adder {

    //Methods -- ploymorphism -- method overloading

    int x=10, y=20;

    void sum(){
        System.out.println(x+y);
    }

    void sum(int a, int b){
        System.out.println(a+b);
    }

    void sum(int a, double b){
        System.out.println(a +b);
    }

    void sum(double a, int b){
        System.out.println(a+b);
    }

    void sum(int a, int b, int c){
        System.out.println(a+b+c);
    }

    public static void main(String[] args) {
        Adder adObj = new Adder();
        adObj.sum();
        adObj.sum(100, 200);
        adObj.sum(10, 10.5);
        adObj.sum(20.5, 20);
        adObj.sum(20, 40, 30);
    }
}
