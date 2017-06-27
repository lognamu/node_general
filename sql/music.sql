use node_general;
create table musician(
	id int(5) primary key auto_increment,
    name varchar(20) not null,
    company varchar(20) not null
);

insert into musician(name, company) values("twice", "JYP");

use hr;

select * from employees;

use node_general;

create table user(
	id varchar(20) primary key auto_increment,
    pwd varchar(20) not null,
    name varchar(20) not null,
    gender varchar(20) not null,
    regdate date not null
);