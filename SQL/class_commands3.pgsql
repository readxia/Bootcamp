select * from employees;

SELECT first_name || ' ' || last_name as FullName from hr.employees
where department_id in (
    select department_id from hr.departments
    where location_id = (
        select location_id from locations
        where city = 'Seattle'
)

);




select * from departments;

select location_id, city from locations;

select * from employees

INSERT 