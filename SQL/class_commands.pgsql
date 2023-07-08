SELECT
-- concatenates the first name and last name
 first_name || ' ' || last_name
 -- or you can concat using the concat command concat(x, y)
 -- renames the column (alias) --
 "Full Name",
 -- different way of renaming the column (alias)
 salary as Old_Salary,
 salary * 1.1
 "Salary with 10% raise"
FROM
 hr.employees
WHERE 
    -- salary <= 35000
    salary in (35000, 60000, 70000)

UPDATE hr.employees SET salary = 40000 
WHERE employee_id = 149

SELECT employee_id, first_name, last_name
FROM hr.employees
WHERE last_name like 'M%'
    and not lower(first_name) like 'k%'

SELECT DISTINCT department_id
FROM hr.employees

SELECT department_id FROM hr.departments
EXCEPT
SELECT department_id FROM hr.employees

SELECT first_name, last_name FROM hr.employees WHERE department_id is 80