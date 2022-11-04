CREATE TABLE IF NOT EXISTS Admin(
	adminID mediumint NOT NULL AUTO_INCREMENT,
    adminName varchar(100) NOT NULL,
	adminPass varchar(100) NOT NULL,
    adminPhone varchar(20),
    adminEmail varchar(100) NOT NULL,
    PRIMARY KEY (adminID)
)