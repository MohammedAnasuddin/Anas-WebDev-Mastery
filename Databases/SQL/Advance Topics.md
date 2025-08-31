# ADVANCE SQL TOPICS

## Sub Queries

A subquery is a query nested inside the main query

```sql
SELECT
  account_no,
  name
FROM customers
WHERE annual_purchases >
  (SELECT AVG(annual_purchases) FROM customers);
```

## CTE

Common Table Expressions are named result sets that are defined at the front of a query and can be accessed by the query just as if they were tables.

CTEs are introduced by the keyword `WITH`, and the results are stored in a named temporary table.

Choose a subquery when:

- You're using the `WHERE` clause keywords `IN` or `EXISTS` to pick up the selection criteria from another table.
- You want to select a single piece of data from another table as the new value for a field in an `UPDATE` statement.

```sql
WITH avg_salary AS (
  SELECT
    role,
    avg(salary) AS average
  FROM employee
  GROUP BY role
)
SELECT
  employee.role,
  name,
  salary,
  avg_salary
FROM employee
JOIN avg_salary ON avg_salary.role = employee.role
ORDER BY role, name
```

choose a CTE when:

- You want to make a complex query more readable.
- You need to use a recursive query.

## CTE vs SUB QUERY

| Feature / Usage                        | CTEs (Common Table Expressions)                         | Subqueries                                 |
| -------------------------------------- | ------------------------------------------------------- | ------------------------------------------ |
| **Definition Location**                | Defined at the front of the query                       | Defined inline within the query            |
| **Naming Requirement**                 | Must always be named                                    | Only PostgreSQL requires naming            |
| **Recursion Support**                  | Can be used recursively                                 | Cannot be used recursively                 |
| **Readability**                        | More readable in complex reports                        | Can become hard to read in complex queries |
| **Reusability**                        | Can be reused multiple times within a query             | Can only be used once                      |
| **Performance Impact**                 | May shorten query definition but not necessarily faster | Typically optimized by the query planner   |
| **WHERE Clause Usage (IN / EXISTS)**   | Not supported                                           | Supported                                  |
| **Single Value Retrieval for Updates** | Not typically used for this                             | Commonly used to fetch a value for updates |
