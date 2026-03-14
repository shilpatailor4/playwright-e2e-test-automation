package Day6;

class Parent{
    void display(int a){
        System.out.println("Parent class " + a);
    }
}

class Child1 extends Parent{
    void show(int b){
        System.out.println("Child1 class " + b);
    }
}

class Child2 extends Parent{
    void print(int c){
        System.out.println("Child2 class " + c);
    }
}

public class HirarchyInheritance {
        public static void main(String[] args) {

            Child1 c1 = new Child1();
            c1.display(100);
            c1.show(200);

            Child2 c2 = new Child2();
            c2.display(300);
            c2.print(400);
            
        }
}
