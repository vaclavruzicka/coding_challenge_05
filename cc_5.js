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

//Adding a method named displayOrder to order the details by retrieving the details using "this" inside of a template literal.
order.displayOrder = function() {
    return `Order ID: ${this.orderID}, Total Amount: $${this.totalAmount}, Status: ${this.status}`
}
console.log(order.displayOrder())

//Task 3 - Array Manipulation

//Declaring an array named cartItems with three different products.
let cartItems = ["Eggs", "Milk", "Cereal"]

//Adding a new product to the cart using push.
cartItems.push("Energy Drinks")

//Removing the last item added by using pop.
cartItems.pop()

//Adding an item to the beginning of the array using unshift.
cartItems.unshift("Waffles")

//Removing the first item from the array using shift.
cartItems.shift()

//Logging the final array to the console.
console.log(cartItems)

//Task 4 - Map Method

//Declaring an array named prices with the values 100, 200, and 300.
let prices = [100, 200, 300]

//Applying a 10% discount using the map method.
let tenPercentDiscount = prices.map(num => num * .9) //Multiplying by .9 to simulate 10% being discounted.

//Logging the new discounted prices.
console.log(tenPercentDiscount)