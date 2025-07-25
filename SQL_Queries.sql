
-- 1. To fetch names and total spend of the top 3 users in the last 60 days:

SELECT u.name, SUM(o.total_amount) AS total_spend
FROM users u
JOIN orders o ON u.id = o.user_id
WHERE o.order_date >= DATE_SUB(CURDATE(), INTERVAL 60 DAY)
GROUP BY u.id, u.name
ORDER BY total_spend DESC
LIMIT 3;

-- 2. To update all pending orders older than 7 days to cancelled:

UPDATE orders
SET status = 'cancelled'
WHERE status = 'pending'
AND order_date < DATE_SUB(CURDATE(), INTERVAL 7 DAY);

-- 3. To count total users who haven’t placed an order in the last 30 days:
    
SELECT COUNT(*) AS inactive_users_count
FROM users u
WHERE NOT EXISTS (
    SELECT 1 FROM orders o
    WHERE o.user_id = u.id
    AND o.order_date >= DATE_SUB(CURDATE(), INTERVAL 30 DAY)
);
