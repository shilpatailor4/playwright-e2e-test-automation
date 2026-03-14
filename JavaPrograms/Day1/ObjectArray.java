package Day1;

public class ObjectArray {
    public static void main(String[] args) {
        Object a[] = {100, 'A', "SHilpa", 10.8, true};

        //iterate the data
        // for(Object arr : a){
        //     System.out.println(arr);
        // }

        for(int i=0; i<a.length; i++){
            System.out.println(a[i]);
        }
    }
}
