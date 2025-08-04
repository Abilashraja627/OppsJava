import java.util.*;

class Details {
    private int id;
    private String name;

    public Details(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public int getId() { // corrected method name
        return id;
    }

    public String getName() { // corrected method name
        return name;
    }

    @Override
    public String toString() {
        return "ID: " + id + ", Name: " + name;
    }
}

class Management {
    private Set<Details> students; // store student objects, not just names

    public Management() {
        students = new HashSet<>();
    }

    public void addStudent(Details details) {
        students.add(details);
        System.out.println("Student " + details.getName() + " has been added.");
    }

    public void removeStudent(Details details) {
        if (students.remove(details)) {
            System.out.println("Student " + details.getName() + " has been removed.");
        } else {
            System.out.println("Student not found.");
        }
    }

    public void viewStudents() {
        if (students.isEmpty()) {
            System.out.println("No students to display.");
        } else {
            System.out.println("List of Students:");
            for (Details d : students) {
                System.out.println(d);
            }
        }
    }
}

public class School {
    public static void main(String[] args) {
        Details std1 = new Details(123, "Abilash");
        Details std2 = new Details(2323, "Bharath");
        Details std3 = new Details(13323, "Pradeep");
        Details std4 = new Details(12333, "Keshi");
        Details std5 = new Details(12673, "Rethi");

        Management man = new Management();
        man.addStudent(std1);
        man.addStudent(std2);
        man.addStudent(std3);
        man.addStudent(std4);
        man.addStudent(std5);

        man.viewStudents();
        System.out.println("------------");

        man.removeStudent(std5);
        System.out.println("------------");

        man.viewStudents();
    }
}
