CREATE TABLE customer (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(50) NULL DEFAULT NULL,
  last_name VARCHAR(50) NULL DEFAULT NULL,
  email VARCHAR(50) NULL DEFAULT NULL,
  img_id INT,
  passwordHash VARCHAR(32) NOT NULL,
  longitude Decimal(9, 6) NULL DEFAULT NULL,
  latitude Decimal(8, 6) NULL DEFAULT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (img_id) REFERENCES img(id)
);


INSERT INTO customer (first_name, last_name, email, passwordHash, longitude, latitude)
VALUES ('John', 'Doe', 'johndoe@example.com', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 1.23456, 2.34567);

INSERT INTO customer (first_name, last_name, email, passwordHash, longitude, latitude)
VALUES ('Jane', 'Doe', 'janedoe@example.com', 'ZYXWVUTSRQPONMLKJIHGFEDCBA', 3.45678, 4.56789);

INSERT INTO customer (first_name, last_name, email, passwordHash, longitude, latitude)
VALUES ('Bob', 'Smith', 'bobsmith@example.com', '1234567890ABCDEFGHIJKLMNOP', 5.67890, 6.78901);

