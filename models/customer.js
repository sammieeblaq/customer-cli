const mongoose = require("mongoose")

const CustomerSchema = mongoose.Schema({
    firstname: { type: String, required: true},
    lastname: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true }
});

const Customer = mongoose.model("Customer", CustomerSchema)

module.exports = Customer