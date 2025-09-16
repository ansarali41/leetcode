# Write your MySQL query statement below
SELECT p.firstName as firstName, p.lastName as lastName ,a.city as city, a.state as state
FROM Person as p
 left join
  Address as a
   on p.personId=a.personId;