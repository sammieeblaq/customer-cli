#!/usr/bin/env;
const program = require("commander");
const { prompt } = require("inquirer");
const { 
    addCustomer, 
    findCustomer, 
    updateCustomer, 
    removeCustomer,
    listCustomers 
} = require("./index");


// Customer questions
const questions = [
    {
        type: "input",
        name: "firstname",
        message: "Customer First Name"
    },
    {
        type: "input",
        name: "lastname",
        message: "Customer Last Name"
    },
    {
        type: "input",
        name: "phone",
        message: "Customer Phone Number"
    },
    {
        type: "input",
        name: "email",
        message: "Customer Email Address"
    }
]



program
    .version("1.0.0")
    .description("Client Management System")


// Add  Command
program
    .command("add")
    .alias("a")
    .description("Add a customer")
    .action(() => {
        prompt(questions).then(answers => addCustomer(answers));
    })


// Find Command
program
    .command("find <name>")
    .alias("f")
    .description("Find a customer")
    .action(name => findCustomer(name))


// Update Command
program
    .command("update <_id>")
    .alias("u")
    .description("Update a customer")
    .action((_id) => {
        prompt(questions).then(answers => updateCustomer(_id, answers));
    })


// Remove command
program
    .command("list")
    .alias("r")
    .description("Find a customer")
    .action(_id => removeCustomer(_id))



// List all 
program
    .command("remove <_id>")
    .alias("l")
    .description("Find a customer")
    .action(_id => removeCustomer(_id))
    

program.parse(process.argv);