CREATE TABLE Food (
  storeID mediumint NOT NULL AUTO_INCREMENT,
  itemName varchar(100) NOT NULL, 
  itemID mediumint NOT NULL AUTO_INCREMENT,
  retailPrice int(10000) NOT NULL,
  discountedPrice int(10000) NOT NULL,
  itemDescription varchar(65000),
  availablePortions int(1000) NOT NULL,
  PRIMARY KEY (`storeID`, `itemID`)
);