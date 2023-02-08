CREATE TABLE restaurant_admin(
  PRIMARY KEY id INT NOT NULL AUTO_INCREMENT,
  FOREIGN KEY restaurant_id INT REFERENCES restaurant(id),
  first_name VARCHAR(50) NULL DEFAULT NULL,
  last_name VARCHAR(50) NULL DEFAULT NULL,
  email VARCHAR(50) NULL DEFAULT NULL,
  passwordHash VARCHAR(32) NOT NULL
);

INSERT INTO restaurant_admin (restaurant_id, first_name, last_name, email, passwordHash)
VALUES (1, 'John', 'Doe', 'johndoe@restaurant.com', 'abcdefghijklmnopqrstuvwxyz123456');
