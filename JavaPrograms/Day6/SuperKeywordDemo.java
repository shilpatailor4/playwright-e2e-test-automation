package Day6;

class Animal{
    String color = "White";

    void eat(){
        System.out.println("Eating...");
    }
}

class Dog extends Animal{
    String color = "Blue";

    void displayColor(){
        System.out.println(super.color);
    }

    void eat(){
    //    System.out.println("Eating brade......");
    super.eat();
    }
}

public class SuperKeywordDemo {
    public static void main(String[] args) {

        Dog dg = new Dog();
       dg.displayColor();
       dg.eat();
        
    }
}
