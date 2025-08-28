# UPDATING ROWS

To update existing data, use an `UPDATE` statement.

`UPDATES` require:

1. Table

2. Columns 

3. Rows

> data you are updating has to  ***<u>match the data type of the columns</u>***  in the table schema.

```sql
UPDATE mytable
SET column = value_or_expr, 
    other_column = another_value_or_expr, 
    …
WHERE condition;
```

> `NOTE`
> 
>  Leaving out the `WHERE` clause  causes the update to apply to *all* rows.
>  `TIP`
> 
> Write the constraint first and test it in a `SELECT` query to make sure you are updating the right rows, and only then writing the column/value pairs to update.
