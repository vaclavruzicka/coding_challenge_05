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

//Logging the final array to the console with a template literal.
console.log(`Shopping Cart: ${cartItems}`)

//Task 4 - Map Method

//Declaring an array named prices with the values 100, 200, and 300.
let prices = [100, 200, 300]

//Applying a 10% discount using the map method.
let tenPercentDiscount = prices.map(num => num * .9) //Multiplying by .9 to simulate 10% being discounted.

//Logging the new discounted prices.
console.log(`Prices discounted 10%: ${tenPercentDiscount}`)

//Task 5 - Filter Method

//Declaring and array named inventory with two of the five values being zero to simulate no stock of a product.
let inventory = [5, 0, 12, 8, 0]

//Removing the products with no stock using the filter method.
let stockedInventory = inventory.filter(product => product > 0) //Making a new variable as to not alter the original.

//Logging the filtered inventory array with a template literal.
console.log(`Stocked Inventory: ${stockedInventory}`)

//Task 6 - Reduce Method

//Declaring an array named sales with the values 500, 300, 200, and 400.
let sales = [500, 300, 200, 400]

//Using the reduce method to calculate the total revenue from the array.
let totalRevenue = sales.reduce((sum, price) => sum + price, + 0) //Using totalRevenue instead of sales in order to leave the original array untouched.

//Logging the total revenue using a template literal.
console.log(`Total Revenue: $${totalRevenue}`)

//Task 7 - find() Method

//Declaring an array named customers with the values Alice, Bob, Charlie, and David.
let customers = ["Alice", "Bob", "Charlie", "David"]

//Locating the customer Charlie within an array using find. 
let findCustomer = customers.find(string => string == "Charlie") //Declaring new variable to not edit the original array.

//Logging the customer finder using a template literal.
console.log(`Found Customer: ${findCustomer}`)

//Task 8 - Function Declaration

//Writing a function that calculates tax using amount and a tax rate.
function calculateTax (amount, taxRate){
    return amount * taxRate
}

//Logging a 6% tax rate on a total of 100 dollars using a template literal.
console.log(`Tax Amount: $${calculateTax(100, .06)}`)