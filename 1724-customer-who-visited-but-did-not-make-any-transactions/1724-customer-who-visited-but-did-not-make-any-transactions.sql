# Write your MySQL query statement below
select Visits.customer_id, count(customer_id) as count_no_trans
from Visits left join Transactions on  Visits.visit_id = Transactions.visit_id and Transactions.amount>0 where amount is null group by Visits.customer_id;
