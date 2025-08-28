# SQL

Structured Query Language, is a language designed to allow both technical and non-technical users to query, manipulate, and transform data from a relational database.

## Relational Databases

A relational database represents a collection of related (two-dimensional) tables.

Each of the tables has 

1. With a fixed number of named columns (the attributes or properties of the table) 

2. Any number of rows of data.

Think of a table in SQL as a type of an entity  and each row in that table as a specific *instance* of that type. This means that the columns would then represent the common properties shared by all instances of that entity.

## SELECT QUERIES

To retrieve data from a SQL database, we need to write `SELECT` statements, which are often referred to as ***queries***.

> A query  a statement which declares what data we are looking for, where to find it in the database, and optionally, how to transform it before it is returned. It has a specific syntax.

1. To selects a couple columns (properties) of the table with all the rows (instances).
   
   ```sql
   SELECT column, another_column, …
   FROM mytable;
   ```

2. If we want to retrieve absolutely all the columns of data from a table, we can then use the asterisk (`*`) shorthand in place of listing all the column names individually.
   
   ```sql
   SELECT * 
   FROM mytable;
   ```

> As you might have noticed by now, SQL doesn't *require* you to write the keywords all capitalized, but as a convention, it helps people distinguish SQL keywords from column and tables names, and makes the query easier to read.

### WHERE QUERIES

In order to filter certain results from being returned, we need to use a `WHERE` clause in the query.

The clause is applied to each row of data by checking specific column values to determine whether it should be included in the results or not.

> In SQL, a clause is a distinct section or component of an SQL statement that performs a specific function.

```sql
SELECT column, another_column, …
FROM mytable
WHERE condition
    AND/OR another_condition
    AND/OR …;
```

#### Filtering Numeric Data

useful operators that you can use to filter numerical data (ie. integer or floating point):

| Operator            | Condition                                            | SQL Example                   |
| ------------------- | ---------------------------------------------------- | ----------------------------- |
| =, !=, <, <=, >, >= | Standard numerical operators                         | col_name != 4                 |
| BETWEEN … AND …     | Number is within range of two values (inclusive)     | col_name BETWEEN 1.5 AND 10.5 |
| NOT BETWEEN … AND … | Number is not within range of two values (inclusive) | col_name NOT BETWEEN 1 AND 10 |
| IN (…)              | Number exists in a list                              | col_name IN (2, 4, 6)         |
| NOT IN (…)          | Number does not exist in a list                      | col_name NOT IN (1, 3, 5)     |

### 

#### Filtering Text Data

SQL supports a number of useful operators to do things like case-insensitive string comparison and wildcard pattern matching.

>  A wildcard character is *used to substitute one or more characters in a string*. 

| Operator   | Condition                                                                                             | Example                                                               |
| ---------- | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| =          | Case sensitive exact string comparison (*notice the single equals*)                                   | col_name = "abc"                                                      |
| != or <>   | Case sensitive exact string inequality comparison                                                     | col_name != "abcd"                                                    |
| LIKE       | Case insensitive exact string comparison                                                              | col_name LIKE "ABC"                                                   |
| NOT LIKE   | Case insensitive exact string inequality comparison                                                   | col_name NOT LIKE "ABCD"                                              |
| %          | Used anywhere in a string to match a sequence of zero or more characters (only with LIKE or NOT LIKE) | col_name LIKE "%AT%"<br>(matches "AT", "ATTIC", "CAT" or even "BATS") |
| _          | Used anywhere in a string to match a single character (only with LIKE or NOT LIKE)                    | col_name LIKE "AN_"<br>(matches "AND", but not "AN")                  |
| IN (…)     | String exists in a list                                                                               | col_name IN ("A", "B", "C")                                           |
| NOT IN (…) | String does not exist in a list                                                                       | col_name NOT IN ("D", "E", "F")                                       |

> `NOTE`
> 
> LIKE and NOT LIKE are not Case Sensitive

### Performing NULL Checks

A field with a NULL value is a field with no value.

Standard comparison operators like `=` or `!=` will not work as expected with `NULL`. Because to perform comparison we need a known value as reference whereas `NULL` was made to represent an Unknown Value. 

To check for NULL's use `IS NULL` or `IS NOT NULL`

```sql
SELECT column_names
FROM table_name
WHERE column_name IS NULL / NOT NULL;
```

### Filtering and Sorting Results

#### Removing Duplicates

SQL provides a convenient way to discard rows that have a duplicate column value by using the `DISTINCT` keyword.

`DISTINCT` keyword will blindly remove duplicate rows

> `NOTE`
> 
> If used on multiple columns, `DISTINCT` returns unique combinations of values across those columns.

```sql
SELECT DISTINCT column, another_column, …
FROM mytable
WHERE condition(s);
```

> We can discard duplicates based on specific columns using grouping and the `GROUP BY` clause.

#### Ordering(Arranging) Results

SQL provides a way to sort your results by a given column in ascending or descending order using the `ORDER BY` clause.

```sql
SELECT column, another_column, …
FROM mytable
WHERE condition(s)
ORDER BY column ASC/DESC;
```

`ASC`: (A-Z for text, 0-9 for numbers).

`DESC`:  (Z-A for text, 9-0 for numbers)

> `ASC` is the default sorting order if nothing is specified.

#### Limiting Results

`LIMIT` and `OFFSET` clauses, which are a useful optimization to indicate to the database the subset of the results you care about.

`LIMIT` used specify number of rows to be included in the result.

`OFFSET`  used to skip a specified number of rows from the result.

```sql
SELECT column, another_column, …
FROM mytable
WHERE condition(s)
ORDER BY column ASC/DESC
LIMIT num_limit OFFSET num_offset;
```

> These generally executed last after the other clauses have been applied.

> `NOTE`
> Don't use `OFFSET` before `LIMIT` since he SQL parser throws a **syntax error** because this sequence isn’t supported.

> Explanation:
> 
> `LIMIT` : Gives the required no. of results 
> `OFFSET`: How many results you want to skip
> 
> So **How Could you skip rows before getting the results?**

### JOINS

Entity data in the real world is often broken down into pieces and stored across multiple orthogonal tables using a process known as normalization

> **Orthogonal Tables**
> 
> A database design to eliminate data redundancy by ensuring that no two relations (tables) in a relational database can represent the same facts. It ensures that there's no confusion about where a particular piece of information "belongs" in the database.
> 
> **Normalization**
> 
> The process of organizing data within a relational database to reduce data redundancy and improve data integrity by *breaking down large tables into smaller, more manageable tables* and *establishing relationships between them using keys*.
> 
> Normalization is useful because it **minimizes duplicate data** in any single table, and allows for data in the **database to grow independently of each other**.

On Performing Normalization, queries get **slightly more complex** since they have to be able to *find data from different parts of the database* and performance issues can arise when working with many large tables.

Tables that share information about a single entity (row) need to have a *primary key* that identifies that entity *uniquely* across the database.

Using the `JOIN` clause in a query, we can combine row data across two separate tables using this unique key.

#### INNER JOIN

The `INNER JOIN` is a process that matches rows from the first table and the second table which have the same key as defined by the `ON` constraint 

And creates a resultant row with the combined columns(properties) from both tables.

```sql
SELECT column, another_table_column
FROM mytable
INNER JOIN another_table 
    ON mytable.id = another_table.id
```

> `NOTE`
> 
> You might see queries where the `INNER JOIN` is written simply as a `JOIN`. These two are equivalent.

> `Doubts Cleared`
> 
> 1. **table_name.column_name** → like a **property accessor**
> 
> 2. The `ON` clause tells SQL **how the two tables are related**.
>    
>    1. `ON mytable.id = another_table.id` -> 
>       
>       - *“Match rows where the value of `id` in `mytable` equals the value of `id` in `another_table`.”*
> 
> 3. During INNER JOIN , SQL makes a **temporary virtual table** by combining rows from both tables that satisfy the `ON` condition.

> **How Could we access another table columns Initially Before JOING the tables?**
> 
> 1. SQL first **joins** the two tables into a **virtual temporary table** (a combined dataset).  This temporary result has **all columns from both tables**.
> 
> 2. SQL has this big virtual table (all columns from both tables), the `SELECT` decides **which columns to keep and show**.
> 
> 3. SQL Executes the Query with respect priorities of the clauses present in the query. 

#### OUTER JOINS

If the two tables have asymmetric data, which can easily happen when data is entered in different stages then `INNER JOIN` might not be sufficient because the resulting table only contains data that belongs in both of the tables.

To ensure that the data you need is not left out of the results, use a `LEFT JOIN`, `RIGHT JOIN` or `FULL JOIN`

```sql
SELECT column, another_column, …
FROM mytable
INNER/LEFT/RIGHT/FULL JOIN another_table 
    ON mytable.id = another_table.matching_id
```

> ![enter image description here](.\SELECT\Venn%20Intersection.png)
> The overlap is known as the ***Intersection***, and it represents all common/matched rows from both the Tables. 
> `INNER JOIN` got its name Since it retrieves all the rows from **INSIDE** the Intersection and  
> `OUTER JOIN` because it retrieves rows from Inside and **Outside** of the Intersection (Depending on the type of `JOIN`)

Consider two tables:  

- A- Left Table

- B- Right Table
  
  > SQL came from Relational Algebra (Sets , Venn Diagrams). 
  > 
  > It uses Left Circle and Right Circle naming conventions Thus SQL Continued the same.

##### Left JOIN

`LEFT JOIN` simply includes rows from A regardless of whether a matching row is found in B

##### Right JOIN

`RIGHT JOIN` is the same, but reversed, keeping rows in B regardless of whether a match is found in A.

##### Full JOIN

`FULL JOIN` simply means that rows from both tables are kept, regardless of whether a matching row exists in the other table.

![](.\SELECT\SQL%20JOINS.png)

> `NOTE`
> 
> When using any of these new joins, you will likely have to write additional logic to deal with `NULL`
> 
> You might see queries with these joins written as `LEFT OUTER JOIN`, `RIGHT OUTER JOIN`, or `FULL OUTER JOIN`, but the `OUTER` keyword is really kept for SQL-92 compatibility and these queries are simply equivalent to `LEFT JOIN`, `RIGHT JOIN`, and `FULL JOIN` respectively.

> Checkout `Working OF JOINS.tldr` and `Comparsion OF JOINS.pdf`

#### NULL and JOINS

It's always good to reduce the possibility of `NULL` values in databases because they require special attention when constructing queries,constraints (certain functions behave differently with null values) and when processing the results.

> An alternative to `NULL` values in your database is to have *data-type appropriate default values*, like 0 for numerical data, empty strings for text data.
> 
> To store incomplete data, then `NULL` values can be appropriate if the default values.

 You can test a column for `NULL` values in a `WHERE` clause by using either the `IS NULL` or `IS NOT NULL` constraint.
 

```sql
SELECT column, another_column, …
FROM mytable
WHERE column IS/IS NOT NULL
```

### Evaluating Expressions and Aliases

The use of expressions can save time and extra post-processing of the result data, but can also make the query harder to read, so we recommend that when expressions are used in the `SELECT` part of the query, that they are also given a descriptive *alias* using the `AS` keyword.

```sql
SELECT col_expression AS expr_description, …
FROM mytable;
```

> Use `ROUND(col_expression)` on Numeric Data for better readable values.

### Aggregate Functions

Aggregate expressions (or functions) allows you to summarize information about a group of rows of data.

Give your aggregate functions an alias this ensures that the results will be easier to read and process.

```sql
SELECT AGG_FUNC(column_or_expression) AS aggregate_description, …
FROM mytable
WHERE constraint_expression;
```

> Without a specified grouping, each aggregate function is going to run on the whole set of result rows and return a single value. 

| Function                        | Description                                                                                                                                                                                     |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **COUNT(*)**, **COUNT(column)** | A common function used to counts the number of rows in the group if no column name is specified. Otherwise, count the number of rows in the group with non-NULL values in the specified column. |
| MIN(**column**)                 | Finds the smallest numerical value in the specified column for all rows in the group.                                                                                                           |
| MAX(**column**)                 | Finds the largest numerical value in the specified column for all rows in the group.                                                                                                            |
| AVG(column)                     | Finds the average numerical value in the specified column for all rows in the group.                                                                                                            |
| SUM(**column**)                 | Finds the sum of all numerical values in the specified column for the rows in the group.                                                                                                        |

In addition to aggregating across all the rows, you can instead apply the aggregate functions to individual groups of data within that group.

This would then create as many results as there are unique groups defined as by the `GROUP BY` clause.

The `GROUP BY` clause works by grouping rows that have the same value in the column specified.

```sql
SELECT AGG_FUNC(column_or_expression) AS aggregate_description, …
FROM mytable
WHERE constraint_expression
GROUP BY column;
```

#### Filtering Grouped Data

> if the `GROUP BY` clause is executed after the `WHERE` clause (which filters the rows which are to be grouped), then how exactly do we filter the grouped rows?

SQL allows us to do this by adding an additional `HAVING` clause which is used specifically with the `GROUP BY` clause to allow us to filter grouped rows from the result set.
 The `HAVING` clause constraints are written the same way as the `WHERE` clause constraints, and are applied to the grouped rows.

```sql
SELECT group_by_column, AGG_FUNC(column_expression) AS aggregate_result_alias, …
FROM mytable
WHERE condition
GROUP BY column
HAVING group_condition;
```

## Execution Order of SELECT Clause

Complete `SELECT` QUERY

```sql
SELECT DISTINCT column, AGG_FUNC(column_or_expression), …
FROM mytable
    JOIN another_table
      ON mytable.column = another_table.column
    WHERE constraint_expression
    GROUP BY column
    HAVING constraint_expression
    ORDER BY column ASC/DESC
    LIMIT count OFFSET COUNT;
```

Core Principal :   *finding the data that we need in a database, and then filtering that data down into something that can be processed and understood as quickly as possible.*

1. `FORM` and `JOINS`
   
   first executed to determine the total working set of data that is being queried.

2. `WHERE`
   
   Once we have the total working set of data, the first-pass `WHERE` constraints are applied to the individual rows, and rows that do not satisfy the constraint are discarded.
   
   > Aliases in the `SELECT` part of the query are not accessible. since they do not match with column of the total set.

3. `GROUP BY`
   
   1. The remaining rows after the `WHERE` constraints are applied are then grouped based on common values in the column specified in the `GROUP BY`

4. ## `HAVING`
   
   1. If the query has a `GROUP BY` clause, then the constraints in the `HAVING` clause are then applied to the grouped rows, discard the grouped rows that don't satisfy the constraint.

5. ## `SELECT`
   
   1. Any expressions in the `SELECT` part of the query are finally computed.

6. ## `DISTINCT`
   
   1.  rows with duplicate values in the column marked as `DISTINCT` will be discarded.

7. ## `ORDER BY`
   
   1. the rows are then sorted by the specified data in either ascending or descending order.
   
   2. >  Since all the expressions in the `SELECT` part of the query have been computed, *you can reference aliases in this clause.*

       

8. ## `LIMIT` / `OFFSET`
   
    1. rows that fall outside the range specified by the `LIMIT` and `OFFSET` are discarded
