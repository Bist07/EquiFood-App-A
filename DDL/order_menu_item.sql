CREATE TABLE order_menu_item(
  PRIMARY KEY id INT NOT NULL AUTO_INCREMENT,
  FOREIGN KEY food_order_id INT REFERENCES food_order(id),
  FOREIGN KEY menu_item_id INT REFERENCES menu_item(id),
  qty_ordered FLOAT NOT NULL DEFAULT 0
);