//Task 1 - Object Properties

//Declaring an object named customer with name, age, and email properties.
let customer = {
    Name: "John Doe", Age: 35, Email: "john.doe@email.com"
}

//Using a for-in loop to log each property using a template literal.
for (const key in customer) {
    console.log(`${key}: ${customer[key]}`)
    }