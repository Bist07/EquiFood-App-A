CREATE TABLE Restaurant (
  storeID mediumint NOT NULL AUTO_INCREMENT,
  storeName varchar(100) NOT NULL, 
  storeDescription text(65000),
  totalDonatedAmount int(255),
  cuisineStyle text(65000),
  address text(65000) NOT NULL,
  openHours varchar (100), 
  restaurantImg varchar(100) NOT NULL,
  avgCostForTwo int(255),
  latitude int(255),
  longitude int(255),
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
       
INTO Restaurant
Values (0, 'Subway', null, 0, 'Sandwiches', '3333 University Way, Kelowna, BC', 'Monday - Sunday: 8AM - 2AM',
         'https://francorpbaltic.com/wp-content/uploads/2020/10/SUBWAY-LOGO-2.png', 49.940049, -119.397933);
         
INSERT INTO Restaurant
Values (1, 'Freshii', null, 0, 'Healthy', '5538 Airport Way, Kelowna, BC', 'Monday - Sunday: 8AM - 8PM',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Freshii_logo.svg/500px-Freshii_logo.svg.png', 49.95102, -119.38151);

INSERT INTO Restaurant
Values (2, 'Jugo Juice', null, 0, 'Drink', '4075 Gordon Drive, Kelowna, BC', 'Monday - Sunday: 8AM - 6PM', 'https://scontent-ord5-2.xx.fbcdn.net/v/t1.6435-9/127154850_4174562302594841_4174389664354802097_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=AZixSTKNy6UAX_iwtqC&_nc_ht=scontent-ord5-2.xx&oh=00_AfDjl_2b4P3Hz1HZ0jDqkOaCswuTyu5nVr_19ONbra6OuQ&oe=63EADFB8',
         49.837789, -119.481287);
       0, 'Coffee Shop', '3135 Gordon Dr', '6:00am - 12:00pm', 'Pictures/TimHortons/Logo', null, null);

INSERT INTO Restaurant
Values (000002, 'Starbucks', 'offers several blends of coffee, handcrafted beverages, merchandise, and food items.',
       0, 'Coffee Shop', '2365 Gordon Dr', '6:00am - 6:00pm', 'Pictures/Starbucks/Logo', null, null);
       
INSERT INTO Restuarant
Values (000003, 'Dominos', 'Dominos offers its customers a wide range of pizzas products with varying crusts and sizes, pasta-based dishes, chicken wings, boneless chicken, oven-baked sandwiches, bread side items, soft drinks, and desserts.',
       0, 'Pizza', '1455 harvey Ave', '11:00am - 1:00pm', 'Pictures/Dominos/Logo', null, null);

INSERT INTO Restaurant
Values (000004, 'Boston Pizza', 'an extensive choice of gourmet pizzas with fresh ingredients, hearty pasta, saucy wings, and so much more to satisfy all of your cravings... ',
       0, 'Pizza', '545 Harvey Ave', '11:00am - 11:00pm', 'Pictures/BostonPizza/Logo', null, null);
       
INSERT INTO Restaurant
Values (000005, 'Wrap Zone', ' wraps, rice bowls, salads and smoothies are made-to-order from fresh, quality ingredients.',
       0, 'Wraps', '104-3320 Richter St', '10:00am - 9:00pm', 'Pictures/WrapZone/Logo', null, null);
