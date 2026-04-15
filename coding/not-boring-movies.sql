# Write your MySQL query statement below
select * from Cinema
where
(id%2 != 0) AND description NOT LIKE "boring"
ORDER BY rating DESC;
