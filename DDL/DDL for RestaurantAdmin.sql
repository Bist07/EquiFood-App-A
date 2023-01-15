

CREATE TABLE IF NOT EXISTS restaurantAdmin(
	restaurantAdminID mediumint NOT NULL AUTO_INCREMENT,
    restuarantAdminName varchar(100) NOT NULL,
    restuarantAdminPass varchar(100) NOT NULL,
    restaurantAdminPhone varchar(20) NOT NULL,
    restaurantAdminEmail varchar(100) NOT NULL,
	totalDonationPerRestaurant mediumint,
    PRIMARY KEY (adminID)
);
