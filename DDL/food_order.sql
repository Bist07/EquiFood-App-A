CREATE TABLE food_order (
PRIMARY KEY id INT NOT NULL AUTO_INCREMENT,
FOREIGN KEY customer_id INT REFERENCES customer(id),
FOREIGN KEY restaurant_id INT REFERENCES restaurant(id),
FOREIGN KEY order_status_id INT REFERENCES order_status(id),
Total_amount FLOAT NOT NULL DEFAULT 0,
Reservation_datetime DATETIME NOT NULL,
customer_rating TEXT NULL DEFAULT NULL,
discount FLOAT NOT NULL DEFAULT 0
);
