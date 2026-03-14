package Day7;

interface Shape{

    int length=10;  //final & static
    int width=20;   //final & static

    void circle();  //abstract method

    default void square(){   //default method
       System.out.println("This is square... default method..");
    }

   static void reactangle(){
    System.out.println("This is reactangle... static method..");
    }
}


public class InterfaceDemo implements Shape{

    public void circle(){
            System.out.println("This is circle....abstract method");
        }

    public void triangle(){
        System.out.println("This is triangle.....");
    }
        
    public static void main(String[] args) {

        InterfaceDemo ifd = new InterfaceDemo();
        ifd.circle();  //abstract 
        ifd.square();  //default
        Shape.reactangle();  //static method can directly access from interface
        ifd.triangle();
      

        Shape sp = new InterfaceDemo();
        sp.circle();  //abstract
        sp.square();  //default
        Shape.reactangle();   //static method can directly access from interface
        
       System.out.println(Shape.length * Shape.width);  //accessing static variables directly
       
        
    }
}
