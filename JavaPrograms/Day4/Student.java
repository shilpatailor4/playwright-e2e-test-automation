package Day4;

public class Student {

    int sId;
    String sName;
    char sGrade;

    Student(int id, String name, char grade){
        sId = id;
        sName = name;
        sGrade= grade;
    }

    public void printStudentData(){
        System.out.println(sId + " " + sName + " " + sGrade);
    }
    public static void main(String[] args) {
        Student stu = new Student(102, "Shilpa", 'A');
        stu.printStudentData();
    }
}
