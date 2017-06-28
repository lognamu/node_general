use node_general;

create table bbs(
	idx int(5) primary key auto_increment,
    title varchar(20) not null,
    content text not null,
    name varchar(20) not null,
    regdate date not null
);

delete from bbs;
insert into bbs(title, content, name, regdate)
values('첫 게시물' ,'안녕하세요?', '장동혁', curdate());