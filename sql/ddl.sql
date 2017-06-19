create database node_general default charset 'utf8';

show databases;
create user 'flynn'@'localhost' identified by '1111';
use mysql;
select * from user;
grant all on *.* to 'flynn'@'localhost';
select * from user;
#여기서 connection을 만들러가자!

use node_general;

create table class(
	number int(2),
    name varchar(10)
);

show tables;
desc class;

insert into class(number, name)  values(1, '윤태환');
insert into class(number, name)  values(2, '이나래');
select * from class;

drop table class;
drop database node_general;

#node_general은 앞으로 쭉 사용해야 하기 때문에 다시 생성하도록 하겠습니다.
grant all on *.* to 'flynn'@'localhost';
select * from user;

#더 많은 DDL이있지만 시간상 이정도만 진행하겠습니다.


