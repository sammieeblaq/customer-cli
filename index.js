const mongoose = require("mongoose");

const db =  mongoose.connect("mongodb://localhost/customer-cli", { useNewUrlParser: true });

const Customer = require("./models/customer")


//Add Customer
const addCustomer = customer => {
	Customer.create(customer)
		.then(customer => {
			console.info("New Customer Added");
		});
}

// Find Customer
const findCustomer = name => {
	// make case insensitive
	const search = new RegExp(name, "i");
	Customer.find({$or: [
		{firstname: search},
		{lastname: search}
	]
	})
		.then(customer => {
			console.info(customer);
			console.info(`${customer.length} matches`)
		});
}


// Update Customer
const updateCustomer = (_id, customer) => {
	Customer.update({ _id }, customer)
		.then(customer => {
			console.info("Customer Updated")
		})
}


// Remove Customer
const removeCustomer = (_id) => {
	Customer.remove({ _id }, customer)
		.then(customer => {
			console.info(customer);
			console.info(`Customer Deleted`)
		})
}

// List all Customers
const listCustomers = () => {
	Customer.find()
		.then(customers => {
			console.info(customers)
			console.info(`${customers.length} customers`)
		})

}

module.exports = {
	addCustomer, 
	findCustomer,
	updateCustomer,
	removeCustomer,
	listCustomers
};