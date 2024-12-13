// Initialize the customer queue
let customerQueue = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

// Function to add a customer to the queue
function addCustomer(name) {
    customerQueue.push(name);
    console.log(${name} added to the queue. Queue number: ${customerQueue.length});
    displayQueue();
}





// Function to service a customer
function serviceCustomer(number) {
    // Adjust number to account for 0-based indexing
    const index = number - 1;

// Check if the number is valid
    if (index >= 0 && index < customerQueue.length) {
        const servedCustomer = customerQueue.splice(index, 1)[0];
        console.log(Customer ${number} (${servedCustomer}) served.);
        displayQueue();
    } else {
console.log("Invalid customer number.");
    }
}
// Function to display the queue
function displayQueue() {
    if (customerQueue.length === 0) {
        console.log("Queue is empty.");
    } else {
        console.log("Current Queue:");
        customerQueue.forEach((customer, index) => {
console.log(${index + 1}. ${customer});
        });
    }
}

//Example Usage (simulating interactions)
console.log("Initial Queue:");
displayQueue();

addCustomer("John"); // Adding a new customer
serviceCustomer(3); // Servicing customer number 3
serviceCustomer(1); // Servicing customer number 1
serviceCustomer(6); //Trying to service an invalid customer number.
