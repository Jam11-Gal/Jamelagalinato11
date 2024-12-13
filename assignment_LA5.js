// Simple hash function (replace with a more robust one for production)
function hash(name, tableSize) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = (hash << 5) - hash + name.charCodeAt(i);
        hash |= 0; // Convert to 32bit integer
    }
    return Math.abs(hash) % tableSize;
}

// Initialize the hash table (using separate chaining to handle collisions)
const tableSize = 5;
const customerHashTable = new Array(tableSize).fill(null).map(() => []);

// Function to add a customer to the hash table
function addCustomer(name) {
    const index = hash(name, tableSize);
    customerHashTable[index].push(name);
    console.log(${name} added to the hash table at index ${index + 1}.);
    displayHashTable();
}

// Function to service a customer
function serviceCustomer(number) {
    // Adjust number to account for 0-based indexing
    const index = number - 1;

    // Check for valid index and non-empty bucket
    if (index >= 0 && index < tableSize && customerHashTable[index].length > 0) {
        const servedCustomer = customerHashTable[index].shift(); // Remove from the front of the chain
        console.log(Customer ${number} (${servedCustomer}) served.);
        displayHashTable();
    } else {
        console.log("Invalid customer number or no customer at that position.");
    }
}

// Function to display the hash table
function displayHashTable() {
    console.log("Current Hash Table:");
    customerHashTable.forEach((bucket, index) => {
        console.log(${index + 1}: ${bucket.join(", ") || "Empty"});
    });
}

// Example usage
addCustomer("Elaine");
addCustomer("Althea");
addCustomer("Angelo");
addCustomer("Lito");
addCustomer("Engelbert");
addCustomer("Another Customer"); // Test collision handling

serviceCustomer(3);
serviceCustomer(1);
serviceCustomer(6); // Test invalid input
