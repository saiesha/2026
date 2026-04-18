# Write your MySQL query statement below
select DATE_FORMAT(trans_date, '%Y-%m') AS month, country, count(id) AS trans_count,
count(CASE WHEN state="approved" THEN id else NULL END) AS approved_count, sum(amount) AS trans_total_amount, sum(CASE WHEN state = "approved" THEN amount else 0 END) AS approved_total_amount
from Transactions
group by month, country;
