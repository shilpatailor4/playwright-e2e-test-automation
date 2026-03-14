package Day7;

//Multiple Inheritance using through interface

public class C1 extends C2 implements I1, I2{
    public void m1(){
        System.out.println(x);
    }

    public void m2(){
        System.out.println(y);
    }

    public static void main(String[] args) {
        C1 c1 = new C1();
        c1.m1();
        c1.m2();
        c1.m3();
    }
}
