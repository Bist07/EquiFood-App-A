CREATE TABLE Restaurant (
  storeID mediumint NOT NULL AUTO_INCREMENT,
  storeName varchar(100) NOT NULL, 
  storeDescription text(65000),
  totalDonatedAmount int(255),
  cuisineStyle text(65000),
  address text(65000) NOT NULL,
  openHours varchar (100), 
  PRIMARY KEY (`storeID`)
);