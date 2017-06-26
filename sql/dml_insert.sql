use node_general;

drop table teacher;
create table teacher(
	t_code int(2) primary key,
  name varchar(20),
  age int(3)
);

insert into teacher(t_code, name, age) values(1, 'flynn', 40);
select * from teacher;
insert into teacher(t_code, name, age) values(2, 'john', 30);
##실습 teacher테이블에 t_code가 2이고 name이 'john'아며 나이가 30인 튜플을 추가하시오.


create table lecture(
	l_code int(2) primary key auto_increment,
  name varchar(20),
  classroom varchar(20),
  t_code int(2)
);

insert into lecture(name, classroom, t_code) values('NodeJS', '1강의장', 1);
select * from lecture;
##실습 lecture테이블에  이름이 'Android'이고 classroom이 '2강의장'이며 담당강사가 john인 튜플을 추가하시오.
insert into lecture(name, classroom, t_code) values('Android', '2강의장', 2);

select lecture.*, teacher.* from lecture, teacher;
select lecture.*, teacher.* from lecture , teacher  where lecture.t_code = teacher.t_code;
select lecture.*, teacher.name, teacher.age from lecture , teacher  where lecture.t_code = teacher.t_code;
select l.*, t.name, t.age from lecture l, teacher t where l.t_code = t.t_code;

use hr;
#employees테이블에 있는 department_id는 departments테이블의 department_id를 가리키고 있다.
#join으로 employees테이블에서 first_name, department_id를 출력하고 departments테이블에서 department_name을 출력하시오.
