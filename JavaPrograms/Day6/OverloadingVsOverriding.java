package Day6;

class ABC{
    void m1(int a){
        System.out.println(a);
    }

    void m2(int b){
        System.out.println(b);
    }
}

class XYZ extends ABC{
    void m1(int a){
        System.out.println(a*a);  //overriding
    }

    void m2(int a, int b){
        System.out.println(a+b);  //overloading
    }
}

public class OverloadingVsOverriding {
    public static void main(String[] args) {
        XYZ xyz = new XYZ();
        xyz.m1(10);
        xyz.m2(20);
        xyz.m2(10, 20);
    }
}
