CREATE TABLE menu_item(
  id INT NOT NULL AUTO_INCREMENT,
  item_name VARCHAR(50) NULL DEFAULT NULL,
  price FLOAT NOT NULL DEFAULT 0,
  restaurant_id INT,
  img_id INT,
  PRIMARY KEY (id) ,
  FOREIGN KEY (restaurant_id) REFERENCES restaurant(id),
  FOREIGN KEY (img_id) REFERENCES img(id)
);

INSERT INTO menu_item (item_name, price, restaurant_id)
VALUES ('Hamburger', 10.99, 1);

INSERT INTO menu_item (item_name, price, restaurant_id)
VALUES ('Cheeseburger', 11.99, 1;

INSERT INTO menu_item (item_name, price, restaurant_id)
VALUES ('Veggie Burger', 9.99, 1);

INSERT INTO menu_item (item_name, price, restaurant_id)
VALUES ('Fried Chicken', 12.99, 1);

INSERT INTO menu_item (item_name, price, restaurant_id)
VALUES ('Steak', 18.99, 2);

INSERT INTO menu_item (item_name, price, restaurant_id)
VALUES ('Lobster', 29.99, 2);

INSERT INTO menu_item (item_name, price, restaurant_id)
VALUES ('Salmon', 20.99, 2);

INSERT INTO menu_item (item_name, price, restaurant_id)
VALUES ('Sushi Platter', 22.99, 3);

INSERT INTO menu_item (item_name, price, restaurant_id)
VALUES ('California Roll', 7.99, 3);

INSERT INTO menu_item (item_name, price, restaurant_id)
VALUES ('Spicy Tuna Roll', 8.99, 3);

INSERT INTO menu_item (item_name, price, restaurant_id)
VALUES ('Pad Thai', 12.99, 4);

INSERT INTO menu_item (item_name, price, restaurant_id)
VALUES ('Green Curry', 13.99, 4);

INSERT INTO menu_item (item_name, price, restaurant_id)
VALUES ('Red Curry', 14.99, 4);

INSERT INTO menu_item (item_name, price, restaurant_id)
VALUES ('Yellow Curry', 15.99, 4);

INSERT INTO menu_item (item_name, price, restaurant_id)
VALUES ('Tom Yum Soup', 8.99, 4);
