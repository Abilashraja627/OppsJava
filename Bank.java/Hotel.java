import java.util.*;

class Guest {
    private String name;

    public Guest(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    @Override
    public String toString() {
        return "Name: " + name;
    }

}

class Room {
    private int room_no;
    private boolean isAvailable;

    public Room(int room_no) {
        this.room_no = room_no;
        this.isAvailable = false; // By default, room is not booked
    }

    public int getRoomNumber() {
        return room_no;
    }

    public boolean isAvailable() {
        return isAvailable;
    }

    public void issue() {
        isAvailable = true;
    }

    public void noIssue() {
        isAvailable = false;
    }

    @Override
    public String toString() {
        return "Room No: " + room_no;
    }
}

class HotelManagement {
    private Map<Guest, Room> details;

    public HotelManagement() {
        details = new HashMap<>();
    }

    public void addGuest(Guest g, Room r) {
        if (!r.isAvailable()) {
            r.issue(); // Mark room as booked
            details.putIfAbsent(g, r);
            System.out.println(g + " checked into " + r);
        } else {
            System.out.println("For " + g + ", the " + r + " is not available.");
        }
    }

    public void removeGuest(Guest g) {
        Room r = details.get(g);
        if (r != null) {
            r.noIssue(); // Mark room as available
            details.remove(g);
            System.out.println(g + " checked out from " + r);
        } else {
            System.out.println("No such guest exists: " + g);
        }
    }

    public void viewGuests() {
        if (details.isEmpty()) {
            System.out.println("No guests are currently checked in.");
        } else {
            System.out.println("Current Guests:");
            for (Map.Entry<Guest, Room> entry : details.entrySet()) {
                System.out.println(entry.getKey() + " -> " + entry.getValue());
            }
        }
    }
}

public class Hotel {
    public static void main(String[] args) {
        HotelManagement hm = new HotelManagement();

        Guest g1 = new Guest("Alice");
        Guest g2 = new Guest("Bob");
        Room rm1 = new Room(101);
        Room rm2 = new Room(102);

        hm.addGuest(g1, rm1); // Alice checks into room 101
        hm.addGuest(g2, rm2); // Bob checks into room 102

        hm.addGuest(new Guest("Charlie"), rm1); // Try to book same room, should fail

        hm.viewGuests();

        hm.removeGuest(g1); // Alice checks out
        hm.viewGuests();
    }
}
