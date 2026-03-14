package Day10;

//Upcasting:  converting value from samller to large
// int --- long
//float -- double

//Downcasting: coonverting value from lager to smaller
//long --- int
//double --- float

public class TypeCastingConscepts {
    public static void main(String[] args) {

        //upcasting -- automatic ---- smmaler to larger
        int intValue = 100;
        long longvalue = intValue;
        System.out.println(longvalue);

        //downcasting -- automatic  ---- larger to smaller
        long longvalue1 = 10000;
        int inValue1 = (int) longvalue1;
        System.out.println(inValue1);

        double doubleValue = 1009999.656;
        float floatValue = (float) doubleValue;
        System.out.println(floatValue);

        //example1:
        int i = 100;
        double d = i;  //upcasting
        System.out.println(d);

        //example2:
        double d1 = 287878.676;
        int i1 = (int) d1;  //downcasting
        System.out.println(i1);

    }
}
