CREATE TABLE restaurant_admin(
  id INT NOT NULL AUTO_INCREMENT,
  restaurant_id INT,
  first_name VARCHAR(50) NULL DEFAULT NULL,
  last_name VARCHAR(50) NULL DEFAULT NULL,
  email VARCHAR(50) NULL DEFAULT NULL,
  passwordHash VARCHAR(32) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (restaurant_id) REFERENCES restaurant(id)
);

INSERT INTO restaurant_admin (restaurant_id, first_name, last_name, email, passwordHash)
VALUES (1, 'John', 'Doe', 'johndoe@restaurant.com', 'abcdefghijklmnopqrstuvwxyz123456');
