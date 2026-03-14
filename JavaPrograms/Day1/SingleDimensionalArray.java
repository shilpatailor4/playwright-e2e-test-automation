package Day1;

public class SingleDimensionalArray {
    public static void main(String[] args) {
        //declaring array - approach 1
        // int a[] = new int[5];

        // //add values into array
        // a[0] = 100;
        // a[1] = 200;
        // a[2] = 300;
        // a[3] = 400;
        // a[4] = 500;

        //Approach 2
        int a[] = {100, 200, 300, 400, 500};

        //find length of an array
        int len = a.length;
        System.out.println("Length of array: " + len);

        //read sinlge value from an arrya
        System.out.println("4th index value: " + a[4]); //4 is a index of array

        //reading all the values from ana array
        //Normal for loop
        // for(int i=0; i<len; i++)    //i<a.length, i<=a.length-1
        // {
        //     System.out.println(a[i]);
        // }

        //enhanced for-each loop
        int i=0;
        for(int arr : a){
            System.out.println("i= " + i + ", " + arr);
            i++;
        }
    }
}
