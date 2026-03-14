class SwapNum{

    public static void main(String[] args) {
        int a = 10;
        int b = 20;

        System.out.println("Without Swapped numbers of a and b");
        System.out.println("a: " + a + " b: " + b);
        
        //logic
        a = a + b;
        b = a - b;
        a = a - b;

        System.out.println("Swapped numbers of a and b");
        System.out.println("a: " + a + " b: " + b);
    }
}