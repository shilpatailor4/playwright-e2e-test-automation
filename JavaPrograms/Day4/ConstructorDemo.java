package Day4;

public class ConstructorDemo {
    int x, y;

    ConstructorDemo(){  //default constructor
        x=100;
        y=200;
    }

    ConstructorDemo(int a, int b){  //Parameterized constructor
        x=a;
        y=b;
    }

    void sum(){
        System.out.println(x+y);
    }

    public static void main(String[] args) {
        // ConstructorDemo cd = new ConstructorDemo();  //invoke default constuctor
        ConstructorDemo cd = new ConstructorDemo(10, 20);  //Parameterized constuctor
        cd.sum();
    }
}
