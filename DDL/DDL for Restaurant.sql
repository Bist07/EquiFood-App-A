CREATE TABLE Restaurant (
  storeID mediumint NOT NULL AUTO_INCREMENT,
  storeName varchar(100) NOT NULL, 
  storeDescription varchar(65000),
  totalDonatedAmount int(90000000),
  cuisineStyle varchar(65000),
  address varchar(65000) NOT NULL,
  openHours varchar (100), 
  PRIMARY KEY (`storeID`)
);