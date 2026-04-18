# Write your MySQL query statement below
Select product_name, SUM(unit) AS unit
from Products P JOIN Orders O
ON P.product_id = O.product_id
Where order_date LIKE "2020-02%"
Group By P.product_id, product_name
HAVING SUM(unit) >= 100;
