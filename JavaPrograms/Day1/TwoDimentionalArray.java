package Day1;

public class TwoDimentionalArray {
    public static void main(String[] args) {
        //declar an array
        // //Approach 1
        // int a[][] = new int[3][2];
        // //  int [][]a = new int[3][2];  //correct way
        // //  int []a[] = new int[3][2];   //correct way 

        // //add values from an array
        // a[0][0] = 100;
        // a[0][1] = 200;

        // a[1][0] = 300;
        // a[1][1] = 400; 

        // a[2][0] = 500;
        // a[2][1] = 600;

        //Approach 2
        int a[][] = {
            {100, 200},
            {300, 400}, 
            {500, 600}
        };

        //find lenth of an array
        System.out.println("length of rows: " + a.length);
        System.out.println("length of cols: " + a[0].length);

        //read single value from an array
        System.out.println(a[2][1]);  //600

        //read all array values -- Normal for loop
      /*   System.out.println("Table all data: two dimensional array");
        System.out.println(" Col1   " + "Col2");
        int i = 0;
        for(int r=0; r<a.length; r++){
            for(int c=0; c<a[r].length; c++ ){
                System.out.print("r" + i + " "  +a[r][c] + " ");
                i++;
            }           
            System.out.println();
        }   */


      //Enhanced for--each loop
      for(int row[] : a){
        for(int col : row){
            System.out.print(col + " ");
        }
        System.out.println();
      }
    }
}
