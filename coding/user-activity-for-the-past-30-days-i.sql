# Write your MySQL query statement below
select activity_date AS day, COUNT(DISTINCT user_id) active_users
from Activity
where activity_date <= "2019-07-27" AND activity_date >= "2019-06-28"
group by activity_date;
