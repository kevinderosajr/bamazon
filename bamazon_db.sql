create database bamazon;

use bamazon;

create table products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45),
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

insert into products (product_name, department_name, price, stock_quantity) 
values ("shirt", "clothing", 20, 40), ("pants", "clothing", 60, 30), ("sock", "clothing", 10, 80)
, ("shoes", "shoes", 100, 20), ("iPod", "electronics", 200, 10), ("iPad", "electronics", 300, 15)
, ("batteries", "electronics", 5, 130), ("headphones", "electronics", 189, 35), ("mousepad", "electronics", 20, 40)
, ("computer keyboard", "electronics", 45, 60);

select * from products;


