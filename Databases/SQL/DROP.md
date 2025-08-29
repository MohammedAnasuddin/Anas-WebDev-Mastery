# DROPPING Tables

To remove an entire table including all of its data and metadata use the `DROP TABLE` statement, which differs from the `DELETE` statement in that it also removes the table schema from the database entirely.

```sql
DROP TABLE IF EXISTS mytable;
```

Like the `CREATE TABLE` statement, the database may throw an error if the specified table does not exist, and to suppress that error, you can use the `IF EXISTS` clause.

In addition, if you have another table that is dependent on columns in table you are removing (for example, with a `FOREIGN KEY` dependency) then *you will have to either update all dependent tables first to remove the dependent rows or to remove those tables entirely.*

## DELETE vs TRUNCATE vs DROP

| Command  | Deletes Rows | Deletes Table Schema | Conditional DELETE (WHERE) | Rollback(undo) Possible | Speed   |
| -------- | ------------ | -------------------- | -------------------------- | ----------------------- | ------- |
| DELETE   | ✔ Yes        | ✘ No                 | Yes                        | ✔ Yes                   | Slow    |
| TRUNCATE | ✔ Yes (All)  | ✘ No                 | No                         | ✘ No (mostly)           | Faster  |
| DROP     | ✔ Yes        | ✔ Yes                | No                         | ✘ No                    | Fastest |

> ### Notes
> 
> - **ROLLBACK = undo, but only for uncommitted changes.**
> 
> - Once you **COMMIT**, the changes are **permanent** and you cannot rollback.
