CREATE TABLE food_order (
id INT NOT NULL AUTO_INCREMENT,
customer_id INT,
restaurant_id INT,
order_status_id INT,
Total_amount FLOAT NOT NULL DEFAULT 0,
Reservation_datetime DATETIME NOT NULL,
customer_rating TEXT NULL DEFAULT NULL,
discount FLOAT NOT NULL DEFAULT 0,
PRIMARY KEY (id),
FOREIGN KEY (customer_id) REFERENCES customer(id),
FOREIGN KEY (restaurant_id) REFERENCES restaurant(id),
FOREIGN KEY (order_status_id) REFERENCES order_status(id)
);
