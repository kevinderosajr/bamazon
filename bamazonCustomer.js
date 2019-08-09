
const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "123456789",
    database: "bamazon"
  });

connection.connect(function(err){
    if (err) throw err;
    console.log("Server connected as id: " + connection.threadId);
    quantityInput();
});

function quantityInput(){
    connection.query("SELECT * FROM products", function(err, res){
        for (let i = 0; i < res.length; i++){
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price);
        }
        console.log("-----------------------------------");
        purchasePrompt();
    });
}

function purchasePrompt(){
    inquirer.prompt([
        {
        type: 'input',
        name: 'item_id',
        message: 'Which item id would you like to purchase? ',
        filter: Number,
        validate: validateData
        },
        {
        type: 'input',
        name: 'stock_quantity',
        message: 'How many of these would you like to buy? ',
        filter: Number,
        validate: validateData   
        }
    ])
}

function validateData(value){
    let integer = Number.isInteger(parseFloat(value));
    let sign = Math.sign(value);

    if(integer && sign === 1){
        return true;
    }else{
        return "Please enter a number greater than 0."
    }
}
