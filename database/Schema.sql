create database seabay2;

use seabay2;

create table data (
  id serial,
	name varchar(60),
	price varchar(10),
	category varchar(20),
	images varchar(5),
	quantity varchar(6),
	condition varchar(10),
	watching varchar(5),
	description varchar(255),
	primary key(id)
)