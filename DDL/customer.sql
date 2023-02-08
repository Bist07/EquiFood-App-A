CREATE TABLE customer (
  PRIMARY KEY id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(50) NULL DEFAULT NULL,
  last_name VARCHAR(50) NULL DEFAULT NULL,
  email VARCHAR(50) NULL DEFAULT NULL,
  passwordHash VARCHAR(32) NOT NULL,
  FOREIGN KEY img_id REFERENCES img(id),
  longitude Decimal(9, 6) NULL DEFAULT NULL,
  latitude Decimal(8, 6) NULL DEFAULT NULL
);


INSERT INTO customer (first_name, last_name, email, passwordHash, img_id, longitude, latitude)
VALUES ('John', 'Doe', 'johndoe@example.com', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 1, 1.23456, 2.34567);

INSERT INTO customer (first_name, last_name, email, passwordHash, img_id, longitude, latitude)
VALUES ('Jane', 'Doe', 'janedoe@example.com', 'ZYXWVUTSRQPONMLKJIHGFEDCBA', 2, 3.45678, 4.56789);

INSERT INTO customer (first_name, last_name, email, passwordHash, img_id, longitude, latitude)
VALUES ('Bob', 'Smith', 'bobsmith@example.com', '1234567890ABCDEFGHIJKLMNOP', 3, 5.67890, 6.78901);

