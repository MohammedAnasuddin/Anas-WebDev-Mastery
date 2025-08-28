# DELETING ROWS

`DELETE` statement requires

1. Table to act on 

2. rows  to delete (through the `WHERE` clause.)
   
   ```sql
   DELETE FROM mytable
   WHERE condition;
   ```

> `NOTE`
> 
> If you decide to leave out the `WHERE` constraint, then *all* rows are removed.
> 
> `TIP`
> 
> It's recommended that you run the constraint in a `SELECT` query first to ensure that you are removing the right rows.




