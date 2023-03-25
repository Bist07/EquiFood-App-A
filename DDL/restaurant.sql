CREATE TABLE restaurant (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(50) NOT NULL,
address VARCHAR(50) NULL DEFAULT NULL,
hours  VARCHAR(50) NULL DEFAULT NULL,
cuisine  VARCHAR(50) NULL DEFAULT NULL,
rating  VARCHAR(50) NULL DEFAULT NULL,
img_id INT,
longitude Decimal(9, 6) NULL DEFAULT NULL,
latitude Decimal(8, 6) NULL DEFAULT NULL,
PRIMARY KEY (id),
FOREIGN KEY (img_id) REFERENCES img(id)
);

INSERT INTO restaurant (address, hours, cuisine, rating, longitude, latitude) 
VALUES ('123 Main St', '11:00am-10:00pm', 'Italian', '4.5', -71.0589, 42.3601);

INSERT INTO restaurant (address, hours, cuisine, rating, longitude, latitude) 
VALUES ('456 Market St', '12:00pm-9:00pm', 'Mexican', '4.0', -71.0589, 42.3601);

INSERT INTO restaurant (address, hours, cuisine, rating, longitude, latitude) 
VALUES ('789 Elm St', '1:00pm-8:00pm', 'Japanese', '4.8', -71.0589, 42.3601);

INSERT INTO restaurant (address, hours, cuisine, rating, longitude, latitude) 
VALUES ('111 Oak Ave', '2:00pm-7:00pm', 'Thai', '3.9', -71.0589, 42.3601);

INSERT INTO restaurant (address, hours, cuisine, rating, longitude, latitude) 
VALUES ('222 Maple St', '3:00pm-6:00pm', 'Chinese', '4.2', -71.0589, 42.3601);

INSERT INTO restaurant (address, hours, cuisine, rating, longitude, latitude) 
VALUES ('333 Pine St', '4:00pm-5:00pm', 'Indian', '4.3', -71.0589, 42.3601);

INSERT INTO restaurant (address, hours, cuisine, rating, longitude, latitude) 
VALUES ('444 Cedar Ave', '5:00pm-4:00pm', 'Vietnamese', '4.7', -71.0589, 42.3601);
