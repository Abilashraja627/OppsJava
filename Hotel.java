/*🌟 Project Title: Hotel Guest Management System
✨ Project Overview:
The Hotel Guest Management System is a basic Java application designed using Object-Oriented Programming (OOP) principles.
It allows the management of hotel guests — adding new guests, removing existing guests, and viewing the list of all current guests — in a simple and organized way.

This project demonstrates how to manage guest data efficiently using collections and object-oriented techniques.

🔥 Core Features:
Add Guest:
Add a new guest’s details (Name, ID, and Room Number) into the hotel system.

Remove Guest:
Remove an existing guest based on their information.

View Guests:
Display all guests currently staying at the hotel.

🛠️ Technologies Used:
Language: Java

Concepts Covered:

Classes & Objects

Encapsulation (private variables + getters)

Collections (HashSet to store unique guests)

Method Overriding (toString() for clean printing)*/
import java.util.*;

class Guest {
    private String name;
    private int id;
    private int room_no;

    public Guest(String name, int id, int room_no) {
        this.name = name;
        this.id = id;
        this.room_no = room_no;
    }

    public String getName() {
        return name;
    }

    public int getId() {
        return id;
    }

    public int getRoom() {
        return room_no;
    }

    @Override
    public String toString() {
        return "Guest ID: " + id + ", Name: " + name + ", Room No: " + room_no;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (!(o instanceof Guest))
            return false;
        Guest guest = (Guest) o;
        return id == guest.id && room_no == guest.room_no && name.equals(guest.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, room_no);
    }
}

class HotelManagement {
    private Set<Guest> details;

    public HotelManagement() {
        details = new HashSet<>();
    }

    public void addGuest(Guest g) {
        details.add(g);
        System.out.println("Guest has been added in Room No: " + g.getRoom());
    }

    public void removeGuest(Guest g) {
        if (details.contains(g)) {
            details.remove(g);
            System.out.println("Guest " + g.getName() + " has been removed.");
        } else {
            System.out.println("No guest found with that information.");
        }
    }

    public void viewGuests() {
        if (details.isEmpty()) {
            System.out.println("No guests are currently available.");
        } else {
            System.out.println("Current Guests:");
            for (Guest m : details) {
                System.out.println(m);
            }
        }
    }
}

public class Hotel {
    public static void main(String[] args) {
        HotelManagement hm = new HotelManagement();

        Guest g1 = new Guest("Alice", 1, 101);
        Guest g2 = new Guest("Bob", 2, 102);

        hm.addGuest(g1);
        hm.addGuest(g2);

        hm.viewGuests();

        hm.removeGuest(g1);

        hm.viewGuests();
    }
}
