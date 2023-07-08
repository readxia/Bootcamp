select * from employees;

-- insert data
INSERT INTO employees (employee_id, first_name, last_name, email, phone_numeric, hire_date, job_id, salary, commission_pct, manager_id, department_id)
values ('998', 'Read', 'Xia', 'RXIA', '555.5555', '2023-06-22', 'IT_PROG', '30000', '0.05', '100', '90');


-- update data
UPDATE hr.employees
set salary = salary * 1.1
WHERE employee_id = 998;