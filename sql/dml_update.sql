insert into lecture(name, classroom, t_code) values('Java', '2강의장', 2);
select * from lecture

update lecture set(name='Kotlin', classroom='3강의장') where name='Java';
select l.*, t.name, t.age from lecture l, teacher t where l.t_code = t.t_code;
update lecture set(t_code=1) where id = ?;
select l.*, t.name, t.age from lecture l, teacher t where l.t_code = t.t_code;
