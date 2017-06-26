use node_general;
create table musician(
	id int(5) primary key auto_increment,
    name varchar(20) not null,
    company varchar(20) not null
);

insert into musician(name, company) values("twice", "JYP");