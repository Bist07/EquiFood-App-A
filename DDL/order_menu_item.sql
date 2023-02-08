CREATE TABLE order_menu_item(
  id INT NOT NULL AUTO_INCREMENT,
  food_order_id INT NOT NULL,
  menu_item_id INT NOT NULL,
  qty_ordered FLOAT NOT NULL DEFAULT 0,
  PRIMARY KEY (id),
  FOREIGN KEY (food_order_id) REFERENCES food_order(id),
  FOREIGN KEY (menu_item_id) REFERENCES menu_item(id)
);
