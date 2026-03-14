package Day6;

class A{
    int a;
    void display1(){
        System.out.println("Parent class " + a);
    }
}

class B extends A
{
    int b;
    void show1(){
        System.out.println("Child class " + b);
    }
}

class C extends B
{
    int c;
    void print1(){
        System.out.println("Grand Child " + c);
    }
}
public class MultilevelInheritance {
    public static void main(String[] args) {
        C cobj = new C();
        cobj.a=100;
        cobj.b=200;
        cobj.c=300;

        cobj.display1();
        cobj.show1();
        cobj.print1();
       
    }
}

