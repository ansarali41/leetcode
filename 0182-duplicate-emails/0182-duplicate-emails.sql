# Write your MySQL query statement below
with total_email as (
    SELECT email, count(*) as email_count 
    from Person
    group by email
)

SELECT EMAIL from total_email where email_count>1