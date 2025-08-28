# INSERTING ROWS

## SCHEMA

In SQL, the *database schema* describes the structure of each table, and the datatypes that each column of the table can contain.

This fixed structure allows a database to be efficient, and consistent despite storing millions or even billions of rows.

## INSERTING NEW DATA

 use an `INSERT` statement,  it has three requirements

1. table to write into, 

2. columns of table that we are filling,

3. one or more rows of data to insert.

 each row of data you insert should contain values for every corresponding column in the table.

```sql
INSERT INTO mytable
VALUES (value_or_expr, another_value_or_expr, …),
       (value_or_expr_2, another_value_or_expr_2, …),
       …;
```

### INSERTING INCOMPELETE DATA

you can insert rows with only the columns of data you have by specifying them explicitly.

>  if you have incomplete data and the table *contains columns that support default values*

```sql
INSERT INTO mytable
(column, another_column, …)
VALUES (value_or_expr, another_value_or_expr, …),
      (value_or_expr_2, another_value_or_expr_2, …),
      …;
```
