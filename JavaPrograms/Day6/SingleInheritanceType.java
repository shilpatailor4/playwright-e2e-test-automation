package Day6;

class A{
    int a = 100;
    void display(){
        System.out.println("This is the parent class method.");
    }
}

class B extends A{
    int b = 200;
    void show(){
        System.out.println("This is the child class method.");
    }
}

public class SingleInheritanceType {
    public static void main(String[] args) {
        B bobj = new B();
        System.out.println("a: " + bobj.a);
        System.out.println("b: " + bobj.b);
        bobj.display();
        bobj.show();

    }
}
