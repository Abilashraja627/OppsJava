import java.util.*;

class User {
    int userId;
    String name;

    User(int id, String name) {
        this.userId = id;
        this.name = name;
    }
}

class Book {
    String title;
    boolean isIssued;

    Book(String title) {
        this.title = title;
        this.isIssued = false;
    }

    void issue() {
        isIssued = true;
        System.out.println(title + " issued.");
    }

    void returnBook() {
        isIssued = false;
        System.out.println(title + " returned.");
    }
}

class Library {
    Map<Integer, List<Book>> issuedBooks = new HashMap<>();

    void issueBook(User user, Book book) {
        if (!book.isIssued) {
            book.issue();
            issuedBooks.putIfAbsent(user.userId, new ArrayList<>());
            issuedBooks.get(user.userId).add(book);
        } else {
            System.out.println(book.title + " is already issued.");
        }
    }

    void returnBook(User user, Book book) {
        if (book.isIssued) {
            book.returnBook();
            issuedBooks.get(user.userId).remove(book);
        } else {
            System.out.println(book.title + " is not issued.");
        }
    }

    void showBooks(User user) {
        System.out.println("Books issued to " + user.name + ":");
        List<Book> books = issuedBooks.get(user.userId);
        if (books == null || books.isEmpty()) {
            System.out.println("No books issued.");
        } else {
            for (Book b : books) {
                System.out.println("- " + b.title);
            }
        }
    }
}

public class LibraryApplication {
    public static void main(String[] args) {
        User u1 = new User(123, "Abilash");
        User u2 = new User(622, "Andrew");

        Book book1 = new Book("Java programming");
        Book book2 = new Book("Python programming");
        Book book3 = new Book("C programming");

        Library lib = new Library();

        lib.issueBook(u1, book1);
        lib.issueBook(u1, book2);
        lib.issueBook(u2, book3);

        lib.showBooks(u1);
        lib.showBooks(u2);

        lib.returnBook(u1, book2);

        lib.showBooks(u1);
        lib.showBooks(u2);
    }
}
