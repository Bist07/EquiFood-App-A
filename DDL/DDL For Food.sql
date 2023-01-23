CREATE TABLE Food (
  storeID mediumint NOT NULL,
  itemName varchar(100) NOT NULL, 
  itemID mediumint NOT NULL AUTO_INCREMENT,
  retailPrice int(255) NOT NULL,
  discountedPrice int(255) NOT NULL,
  itemDescription text(16383),
  availablePortions int(255) NOT NULL,
  itemImg varchar(1000) NOT NULL,
  PRIMARY KEY (`itemID`)
);
