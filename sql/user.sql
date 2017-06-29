use node_general;

create table user(
	id varchar(20) primary key,
    pwd varchar(20) not null,
    name varchar(20) not null,
    gender varchar(20) not null,
    regdate date not null
);

insert into user values('flynn0', '1111', '홍길동', 'male', curdate());

