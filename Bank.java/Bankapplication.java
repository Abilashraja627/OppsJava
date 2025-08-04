import java.util.*; // Importing required Java utilities for HashMap

// Account class to represent a bank account
class Account {
    private int accountNumber; // Unique account number
    private double balance; // Current balance

    // Constructor to initialize account details
    public Account(int accountNumber, double balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    // Getter method to retrieve account number
    public int getAccountNumber() {
        return accountNumber;
    }

    // Getter method to retrieve account balance
    public double getBalance() {
        return balance;
    }

    // Method to deposit money into the account
    public void deposit(double amount) {
        if (amount >= 0) {
            balance += amount; // Increase balance
            System.out.println("Deposited $" + amount);
        } else {
            System.out.println("Invalid deposit amount."); // Error message for negative deposits
        }
    }

    // Method to withdraw money from the account
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) { // Check if amount is valid and sufficient balance is available
            balance -= amount; // Deduct amount from balance
            System.out.println("Withdrawn amount: $" + amount);
        } else {
            System.out.println("Invalid Transaction"); // Error message for insufficient funds or invalid amount
        }
    }
}

// Customer class to represent a bank customer
class Customer {
    private String name; // Customer name
    private Account account; // Associated bank account

    // Constructor to initialize customer details
    public Customer(String name, Account account) {
        this.name = name;
        this.account = account;
    }

    // Getter method to retrieve customer name
    public String getName() {
        return name;
    }

    // Getter method to retrieve associated bank account
    public Account getAccount() {
        return account;
    }

    // Method to display customer details
    public void displayCustomerInfo() {
        System.out.println("Customer Name: " + name);
        System.out.println("Account Number: " + account.getAccountNumber());
        System.out.println("Bank Balance: $" + account.getBalance());
    }
}

// Bank class to manage multiple customers
class Bank {
    private HashMap<String, Customer> customerData; // HashMap to store customers with their names as keys

    // Constructor to initialize the bank's customer data
    public Bank() {
        customerData = new HashMap<>();
    }

    // Method to add a customer to the bank
    public void addCustomer(Customer customer) {
        customerData.put(customer.getName(), customer); // Store customer object using name as the key
        System.out.println("Customer added: " + customer.getName());
    }

    // Method to retrieve a customer using their name
    public Customer getCustomerData(String name) {
        return customerData.get(name); // Fetch customer object from HashMap
    }
}

// Main class to execute the bank application
public class Bankapplication {
    public static void main(String[] args) {
        Bank bank = new Bank(); // Creating a new bank instance

        // Creating first customer
        Account acc1 = new Account(12345, 20000); // Creating an account with number 12345 and balance $20,000
        Customer cust1 = new Customer("Abilash", acc1); // Creating a customer named Abilash
        bank.addCustomer(cust1); // Adding the customer to the bank

        // Creating second customer
        Account acc2 = new Account(79799, 10000); // Creating an account with number 79799 and balance $10,000
        Customer cust2 = new Customer("Andrew", acc2); // Creating a customer named Andrew
        bank.addCustomer(cust2); // Adding the customer to the bank

        // Retrieving and interacting with the first customer (Abilash)
        Customer customer = bank.getCustomerData("Abilash"); // Fetch customer details from bank
        if (customer != null) { // Check if customer exists
            customer.displayCustomerInfo(); // Display customer details
            customer.getAccount().deposit(200); // Deposit $200
            customer.getAccount().deposit(5000); // Deposit $5000
            customer.displayCustomerInfo(); // Display updated details
        } else {
            System.out.println("Customer not found"); // Error message if customer is not found
        }
    }
}
