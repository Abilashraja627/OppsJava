import java.util.*;

public class Taxi {

    static class TaxiDetails {
        int id;
        String currentLoc;
        boolean isAvailable;

        public TaxiDetails(int id, String currentLoc) {
            this.id = id;
            this.isAvailable = true;
            this.currentLoc = currentLoc;
        }

        public void taxiBook(String pickup, String drop) {
            if (isAvailable) {
                System.out.println("Taxi #" + id + " is available and booked from " + pickup + " to " + drop);
                this.currentLoc = drop;
                isAvailable = false;
            } else {
                System.out.println("Taxi #" + id + " is not available");
            }
        }

        public void endTrip() {
            System.out.println("Taxi #" + id + " trip ended. Now available at " + currentLoc);
            isAvailable = true;
        }
    }

    static class User {
        String name;

        public User(String name) {
            this.name = name;
        }

        public void bookTaxi(List<TaxiDetails> taxis, String pickup, String drop) {
            System.out.println("User " + name + " is trying to book a taxi from " + pickup + " to " + drop);
            boolean booked = false;

            for (TaxiDetails taxi : taxis) {
                if (taxi.isAvailable) {
                    taxi.taxiBook(pickup, drop);
                    booked = true;
                    break;
                }
            }

            if (!booked) {
                System.out.println("No taxis available for " + name);
            }
        }
    }

    public static void main(String[] args) {
        // Create taxis
        List<TaxiDetails> taxiList = new ArrayList<>();
        taxiList.add(new TaxiDetails(1, "Chennai"));
        taxiList.add(new TaxiDetails(2, "Chennai"));
        taxiList.add(new TaxiDetails(3, "Chennai"));

        // Create users
        User user1 = new User("Abilash");
        User user2 = new User("Venkat");
        User user3 = new User("Sadhapriyan");
        User user4 = new User("Bharath");

        // Users try to book taxis
        user1.bookTaxi(taxiList, "Chennai", "Bangalore");
        user2.bookTaxi(taxiList, "Chennai", "Coimbatore");
        user3.bookTaxi(taxiList, "Chennai", "Madurai");
        user4.bookTaxi(taxiList, "Chennai", "Trichy"); // Should show no taxi available

        // End trip for taxi #1
        taxiList.get(0).endTrip();

        // Now user4 tries again
        user4.bookTaxi(taxiList, "Chennai", "Salem");
    }
}
