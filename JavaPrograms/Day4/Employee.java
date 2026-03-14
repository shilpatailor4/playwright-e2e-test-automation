package Day4;

public class Employee {

    //Variables
    int eId;
    String eName;
    String job;
    int sal;

    //Mthods
    void display(int eId, String eName, String job, int sal){
       System.out.println(eId);
       System.out.println(eName);
       System.out.println(job);
       System.out.println(sal);
    }
    public static void main(String[] args) {

        Employee emp = new Employee();
        // emp.eId=101;
        // emp.eName="SHilpa";
        // emp.job= "Google";
        // emp.sal=25000;
        emp.display(101, "shilpa", "google", 123445);   
        
        //employee 2
        Employee emp2 = new Employee();
        emp2.display(102, "John", "Microsft", 40000);
    }
}
