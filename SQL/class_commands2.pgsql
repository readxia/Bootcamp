SELECT first_name, last_name FROM hr.employees WHERE last_name like 'K%'

-- this will find the number of MANAGERS in the company --
-- we try to find the number of unique managers there are --
SELECT DISTINCT manager_id FROM employees

SELECT
    first_name, last_name, salary, commission_pct
FROM employees LIMIT 10 -- shows the first 10 records --

SELECT lname, coalesce(team_id, 5)
from players

-- group function --
SELECT MAX(salary) FROM employees

-- found out max salary for each department --
SELECT department_id, MAX(salary) FROM employees
GROUP BY department_id
-- take all employees and group them by department, THEN find the max in each group

select job_id, max(salary)
from hr.employees
group by job_id

-- this finds the average salary in each department
select department_id, sum(salary) / count(*)
from hr.employees
group by department_id

-- count how many emlpoyyes are there in each department
select distinct department_id from employees

--sorting
select first_name, last_name
from hr.employees
order by last_name DESC -- ASC ascending DESC for descending

--select locations ordering them by city
select location_id, city from hr.locations order by city ASC

-- how to find how many seconds ive been alive
SELECT CURRENT_DATE - '01-OCT-1999'

SELECT first_name, last_name, extract(month from hire_date) as hire_year from employees

-- using CASE WHEN THEN
CASE expression
    WHEN THEN
    ELSE


-- learning how to use a CASE WHEN THEN statement
SELECT first_name || ' ' || last_name as FullName, extract(year from hire_date),
CASE 
    WHEN extract(year from hire_date) < 2001 THEN 'Senior'
    WHEN extract(year from hire_date) > 2007 THEN 'Junior'
    ELSE 'Mid'
END as Seniority
from hr.employees

--returns only the heavy catchers
SELECT fname, lname, position, weight, height
FROM hr.players
WHERE position = 'Catcher' and weight >= 220

-- subquery example
-- find the avg of employee salary, and show all the employees who make above avg 
SELECT employee_id, first_name
FROM hr.employees
WHERE salary >= (
    SELECT AVG(salary)
    FROM hr.employees
)
