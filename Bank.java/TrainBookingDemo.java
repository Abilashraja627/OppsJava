import java.util.*;

class Train {
    int trainNo;
    String trainName;
    String source;
    String destination;
    int acSeats;
    int nonAcSeats;

    public Train(int trainNo, String trainName, String source, String destination, int acSeats, int nonAcSeats) {
        this.trainNo = trainNo;
        this.trainName = trainName;
        this.source = source;
        this.destination = destination;
        this.acSeats = acSeats;
        this.nonAcSeats = nonAcSeats;
    }
}

class Ticket {
    static int counter = 1;
    int ticketId;
    String passengerName;
    int age;
    int bookedSeats;
    String coachType; // "AC" or "Non-AC"
    Train train;

    public Ticket(String passengerName, int age, int bookedSeats, String coachType, Train train) {
        this.ticketId = counter++;
        this.passengerName = passengerName;
        this.age = age;
        this.bookedSeats = bookedSeats;
        this.coachType = coachType;
        this.train = train;
    }
}

class BookingSystem {
    List<Train> trains = new ArrayList<>();
    Map<Integer, Ticket> bookedTickets = new HashMap<>();
    Queue<Ticket> waitingList = new LinkedList<>();
    final int MAX_WAITING = 10;
    Scanner sc = new Scanner(System.in);

    public BookingSystem() {
        trains.add(new Train(101, "Chennai Express", "Chennai", "Bangalore", 10, 10));
        trains.add(new Train(102, "Coimbatore Mail", "Coimbatore", "Chennai", 8, 8));
        trains.add(new Train(103, "Bangalore SF", "Bangalore", "Hyderabad", 5, 5));
    }

    public void showAvailableTrains() {
        System.out.println("\nAvailable Trains:");
        for (Train t : trains) {
            System.out.println("Train No: " + t.trainNo + ", Name: " + t.trainName +
                    ", From: " + t.source + ", To: " + t.destination +
                    ", AC Seats: " + t.acSeats + ", Non-AC Seats: " + t.nonAcSeats);
        }
    }

    public void bookTicket() {
        showAvailableTrains();
        System.out.print("\nEnter Train No to book: ");
        int tno = sc.nextInt();
        Train selectedTrain = null;
        for (Train t : trains) {
            if (t.trainNo == tno) {
                selectedTrain = t;
                break;
            }
        }
        if (selectedTrain == null) {
            System.out.println("Invalid Train Number!");
            return;
        }

        System.out.print("Enter your name: ");
        String name = sc.next();
        System.out.print("Enter your age: ");
        int age = sc.nextInt();
        System.out.print("Enter no. of seats to book: ");
        int seats = sc.nextInt();
        System.out.print("Enter coach type (AC/Non-AC): ");
        String coachType = sc.next();

        boolean booked = false;

        if (coachType.equalsIgnoreCase("AC") && selectedTrain.acSeats >= seats) {
            selectedTrain.acSeats -= seats;
            booked = true;
        } else if (coachType.equalsIgnoreCase("Non-AC") && selectedTrain.nonAcSeats >= seats) {
            selectedTrain.nonAcSeats -= seats;
            booked = true;
        }

        if (booked) {
            Ticket ticket = new Ticket(name, age, seats, coachType, selectedTrain);
            bookedTickets.put(ticket.ticketId, ticket);
            System.out.println("Booking Successful! Ticket ID: " + ticket.ticketId);
        } else if (waitingList.size() < MAX_WAITING) {
            Ticket ticket = new Ticket(name, age, seats, coachType, selectedTrain);
            waitingList.offer(ticket);
            System.out.println("Seats not available. Added to waiting list. Waiting Position: " + waitingList.size());
        } else {
            System.out.println("No seats and waiting list full. Booking failed.");
        }
    }

    public void cancelTicket() {
        System.out.print("Enter Ticket ID to cancel: ");
        int tid = sc.nextInt();
        Ticket ticket = bookedTickets.remove(tid);
        if (ticket != null) {
            if (ticket.coachType.equalsIgnoreCase("AC")) {
                ticket.train.acSeats += ticket.bookedSeats;
            } else {
                ticket.train.nonAcSeats += ticket.bookedSeats;
            }
            System.out.println("Ticket Cancelled Successfully!");

            if (!waitingList.isEmpty()) {
                Ticket wait = waitingList.poll();
                if (wait.coachType.equalsIgnoreCase("AC") && wait.train.acSeats >= wait.bookedSeats) {
                    wait.train.acSeats -= wait.bookedSeats;
                    bookedTickets.put(wait.ticketId, wait);
                    System.out.println("Waiting list ticket confirmed! Ticket ID: " + wait.ticketId);
                } else if (wait.coachType.equalsIgnoreCase("Non-AC") && wait.train.nonAcSeats >= wait.bookedSeats) {
                    wait.train.nonAcSeats -= wait.bookedSeats;
                    bookedTickets.put(wait.ticketId, wait);
                    System.out.println("Waiting list ticket confirmed! Ticket ID: " + wait.ticketId);
                } else {
                    // still not enough seats, re-add to front of queue
                    waitingList.offer(wait);
                    return;
                }

            }
        } else {
            System.out.println("Invalid Ticket ID!");
        }
    }

    public void menu() {
        while (true) {
            System.out.println("\n==== Train Ticket Booking System ====");
            System.out.println("1. Show Available Trains");
            System.out.println("2. Book Ticket");
            System.out.println("3. Cancel Ticket");
            System.out.println("4. Exit");
            System.out.print("Enter your choice: ");
            int ch = sc.nextInt();
            switch (ch) {
                case 1:
                    showAvailableTrains();
                    break;
                case 2:
                    bookTicket();
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

public class TrainBookingDemo {
    public static void main(String[] args) {
        BookingSystem bs = new BookingSystem();
        bs.menu();
    }
}
