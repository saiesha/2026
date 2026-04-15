# Write your MySQL query statement below
Select employee_id from Employees
where salary < 30000 AND manager_id NOT IN (Select employee_id from Employees)
ORDER BY employee_id ASC;
