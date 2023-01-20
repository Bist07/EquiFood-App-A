CREATE TABLE Restaurant (
  storeID mediumint NOT NULL AUTO_INCREMENT,
  storeName varchar(100) NOT NULL, 
  storeDescription varchar(65000),
  totalDonatedAmount int(255),
  cuisineStyle varchar(65000),
  address varchar(65000) NOT NULL,
  openHours varchar (100), 
  restaurantImg varchar(100) NOT NULL,
  avgCostForTwo int(255),
  PRIMARY KEY (`storeID`)
);

INSERT INTO Restaurant
Values (000001, 'Tim Hortons','premium coffee, flavored cappuccinos, specialty teas, soups, sandwiches, wraps, baked goods and donuts',
       0, 'Coffee Shop', '3135 Gordon Dr', '6:00am - 12:00pm', 'Pictures/TimHortons/Logo', null, null, 20);

INSERT INTO Restaurant
Values (000002, 'Starbucks', 'offers several blends of coffee, handcrafted beverages, merchandise, and food items.',
       0, 'Coffee Shop', '2365 Gordon Dr', '6:00am - 6:00pm', 'Pictures/Starbucks/Logo', null, null, 20);
       
INSERT INTO Restuarant
Values (000003, 'Dominos', 'Dominos offers its customers a wide range of pizzas products with varying crusts and sizes, pasta-based dishes, chicken wings, boneless chicken, oven-baked sandwiches, bread side items, soft drinks, and desserts.',
       0, 'Pizza', '1455 harvey Ave', '11:00am - 1:00pm', 'Pictures/Dominos/Logo', null, null, 20);

INSERT INTO Restaurant
Values (000004, 'Boston Pizza', 'an extensive choice of gourmet pizzas with fresh ingredients, hearty pasta, saucy wings, and so much more to satisfy all of your cravings... ',
       0, 'Pizza', '545 Harvey Ave', '11:00am - 11:00pm', 'Pictures/BostonPizza/Logo', null, null, 20);
       
INSERT INTO Restaurant
Values (000005, 'Wrap Zone', ' wraps, rice bowls, salads and smoothies are made-to-order from fresh, quality ingredients.',
       0, 'Wraps', '104-3320 Richter St', '10:00am - 9:00pm', 'Pictures/WrapZone/Logo', null, null, 20);
