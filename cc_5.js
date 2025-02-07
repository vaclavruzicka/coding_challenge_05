//Task 1 - Object Properties

//Declaring an object named customer with name, age, and email properties.
let customer = {
    Name: "John Doe", Age: 35, Email: "john.doe@email.com"
}

//Using a for-in loop to log each property using a template literal.
for (const key in customer) {
    console.log(`${key}: ${customer[key]}`)
}

//Task 2 - Object Methods

//Declaring an object named order with the properties orderID, total amount, and status.
let order = {
    orderID: 12345, totalAmount: 150, status: "Prosessing"
}

//Adding a method named displayOrder to order the details by retrieving the details using "this".
order.displayOrder = function() {
    return this.orderID, this.totalAmount, this.status
}
console.log(order.displayOrder())