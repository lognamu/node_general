use hr;

desc employees;

#하나의 테이블에서 모든컬럼 조회
select * from employees;
##실습 departments라는 테이블에 모든컬럼을 조회하시오.

#하나의 테이블에서 특정컬럼 조회
select employee_id, first_name from employees;
##실습 departments라는 테이블에서 department_id, department_name컬럼만 조회하시오.

#여러 테이블에서 특정컬럼 조회
select employees.first_name, departments.department_name from employees, departments;
##원하는 결과가 안나오시죠? 그것 나중에 조인이라는 것을 배워야 합니다.

#alias
select employee_id as 사번, first_name as 이름 from employees;

select employee_id 사원번호, first_name name from employees;

#where
select employee_id 사번, salary 월급 from employees;
select employee_id 사번, salary 월급 from employees where salary > 10000;
##실습 departments테이블에서 location_id컬럼이 100 보다 작은 튜플을 출력하시오.

select first_name,  job_id from employees where job_id = 'IT_PROG';

select first_name,  job_id, salary from employees where job_id = 'IT_PROG' and salary < 5000;
select first_name,  job_id, salary from employees where job_id = 'IT_PROG' or salary < 5000;
##실습 departments테이블에서 department_name컬럼이 사전순서상 o보다 뒤 이면서
## ex) Administration(x) Shipping(o) manager_id컬럼이 200 이상인 부서를 조회하시오.
