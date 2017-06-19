use node_general;
select * from lecture;

start transaction;
delete from lecture;
select * from lecture;
rollback;

select * from lecture;

start transaction;
delete from lecture where name = 'NodeJS';
select * from lecture;
rollback;

select * from lecture;

use hr;
##실습 
#1) 트렌젝션을 시작하시오. 
#2) regions테이블에서 region_id가 3이상인 튜플을 삭제하시오.
#3) rollback을 통하여 명령을 취소하시오.

start transaction;
delete from regions where region_id >= 3;
select * from employees;
select * from regions;