CREATE TABLE restaurant (
PRIMARY KEY id INT NOT NULL AUTO_INCREMENT,
address VARCHAR(50) NULL DEFAULT NULL,
hours  VARCHAR(50) NULL DEFAULT NULL,
cusiine  VARCHAR(50) NULL DEFAULT NULL,
rating  VARCHAR(50) NULL DEFAULT NULL,
FOREIGN KEY img_id REFERENCES image(id),
longitude Decimal(9, 6) NULL DEFAULT NULL,
latitude Decimal(8, 6) NULL DEFAULT NULL
);

INSERT INTO restaurant (address, hours, cuisine, rating, img_id, longitude, latitude) 
VALUES ('123 Main St', '11:00am-10:00pm', 'Italian', '4.5', 1, -71.0589, 42.3601);

INSERT INTO restaurant (address, hours, cuisine, rating, img_id, longitude, latitude) 
VALUES ('456 Market St', '12:00pm-9:00pm', 'Mexican', '4.0', 2, -71.0589, 42.3601);

INSERT INTO restaurant (address, hours, cuisine, rating, img_id, longitude, latitude) 
VALUES ('789 Elm St', '1:00pm-8:00pm', 'Japanese', '4.8', 3, -71.0589, 42.3601);

INSERT INTO restaurant (address, hours, cuisine, rating, img_id, longitude, latitude) 
VALUES ('111 Oak Ave', '2:00pm-7:00pm', 'Thai', '3.9', 4, -71.0589, 42.3601);

INSERT INTO restaurant (address, hours, cuisine, rating, img_id, longitude, latitude) 
VALUES ('222 Maple St', '3:00pm-6:00pm', 'Chinese', '4.2', 5, -71.0589, 42.3601);

INSERT INTO restaurant (address, hours, cuisine, rating, img_id, longitude, latitude) 
VALUES ('333 Pine St', '4:00pm-5:00pm', 'Indian', '4.3', 6, -71.0589, 42.3601);

INSERT INTO restaurant (address, hours, cuisine, rating, img_id, longitude, latitude) 
VALUES ('444 Cedar Ave', '5:00pm-4:00pm', 'Vietnamese', '4.7', 7, -71.0589, 42.3601);
