import java.util.ArrayList;
import java.util.HashMap;
import java.util.Scanner;

class FlightDetails {
    int id;
    String name;
    String source;
    String destination;
    int Economical_seats;
    int Bussiness_seats;

    public FlightDetails(int id, String name, String source, String destination, int Economical_seats,
            int Bussiness_seats) {
        this.id = id;
        this.name = name;
        this.source = source;
        this.destination = destination;
        this.Economical_seats = Economical_seats;
        this.Bussiness_seats = Bussiness_seats;
    }
}

class Ticket {
    static int count = 1;
    int ticket_id;
    String name;
    int age;
    int booked_seat;
    String class_type;
    FlightDetails Flight;

    public Ticket(String name, int age, int booked_seat, String class_type, FlightDetails flight) {
        this.ticket_id = count++;
        this.name = name;
        this.age = age;
        this.booked_seat = booked_seat;
        this.class_type = class_type;
        this.Flight = flight;
    }
}

class Booking {
    ArrayList<FlightDetails> flightsd = new ArrayList<>();
    HashMap<Integer, Ticket> data = new HashMap<>();
    Scanner sc = new Scanner(System.in);

    public Booking() {
        flightsd.add(new FlightDetails(1, "airIndia", "chennai", "america", 60, 30));
        flightsd.add(new FlightDetails(2, "spiceJet", "delhi", "london", 60, 30));
        flightsd.add(new FlightDetails(3, "indigo", "mumbai", "dubai", 60, 20));
    }

    public void showdetails() {
        System.out.println("Available flights are:");
        for (FlightDetails f : flightsd) {
            System.out.println("ID: " + f.id + ", Name: " + f.name + ", Source: " + f.source + ", Destination: "
                    + f.destination + ", Business Seats: " + f.Bussiness_seats + ", Economical Seats: "
                    + f.Economical_seats);
        }
    }

    public void bookingtick() {
        showdetails();
        System.out.print("Enter the flight id: ");
        int fid = sc.nextInt();
        FlightDetails selectedflight = null;
        for (FlightDetails f : flightsd) {
            if (f.id == fid) {
                selectedflight = f;
                break;
            }
        }
        if (selectedflight == null) {
            System.out.println("No such flight is available");
            return;
        }

        System.out.print("Enter your name: ");
        String name = sc.next();
        System.out.print("Enter your age: ");
        int age = sc.nextInt();
        System.out.print("Enter no. of seats to book: ");
        int seats = sc.nextInt();
        System.out.print("Enter the class (Bussiness/Economical): ");
        String type = sc.next();

        if (type.equalsIgnoreCase("Bussiness") && selectedflight.Bussiness_seats >= seats) {
            selectedflight.Bussiness_seats -= seats;
            Ticket t = new Ticket(name, age, seats, type, selectedflight);
            data.put(t.ticket_id, t);
            System.out.println("Ticket booked successfully. Ticket ID: " + t.ticket_id);
        } else if (type.equalsIgnoreCase("Economical") && selectedflight.Economical_seats >= seats) {
            selectedflight.Economical_seats -= seats;
            Ticket t = new Ticket(name, age, seats, type, selectedflight);
            data.put(t.ticket_id, t);
            System.out.println("Ticket booked successfully. Ticket ID: " + t.ticket_id);
        } else {
            System.out.println("Invalid class type or not enough seats available.");
        }
    }

    public void cancelTicket() {
        System.out.print("Enter your ticket id: ");
        int ticid = sc.nextInt();
        Ticket ticket2 = data.remove(ticid);
        if (ticket2 == null) {
            System.out.println("Invalid ticket ID.");
            return;
        }

        if (ticket2.class_type.equalsIgnoreCase("Bussiness")) {
            ticket2.Flight.Bussiness_seats += ticket2.booked_seat;
        } else if (ticket2.class_type.equalsIgnoreCase("Economical")) {
            ticket2.Flight.Economical_seats += ticket2.booked_seat;
        }

        System.out.println("Ticket cancelled successfully.");
    }

    void menu() {
        while (true) {
            System.out.println("\n==== Flight Ticket Booking System ====");
            System.out.println("1. Show Available Flights");
            System.out.println("2. Book Ticket");
            System.out.println("3. Cancel Ticket");
            System.out.println("4. Exit");
            System.out.print("Enter your choice: ");
            int ch = sc.nextInt();
            switch (ch) {
                case 1:
                    showdetails();
                    break;
                case 2:
                    bookingtick();
                    break;
                case 3:
                    cancelTicket();
                    break;
                case 4:
                    System.out.println("Thank you!");
                    return;
                default:
                    System.out.println("Invalid choice!");
            }
        }
    }
}

public class Flight {
    public static void main(String[] args) {
        Booking br = new Booking();
        br.menu();
    }
}
