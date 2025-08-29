# ALTERING COLUMNS

`ALTER TABLE` statement to add, remove, or modify columns and table constraints.

> The reason for specifying `ALTER TABLE` instead of just `ALTER` in SQL is to clearly indicate the object being modified. SQL commands are designed to be explicit about the target of an operation.

## ADDING COLUMNS

adding a new column is similar to the syntax when creating new rows in the `CREATE TABLE` statement.

```sql
ALTER TABLE mytable
ADD column_name DataType OptionalTableConstraint 
    DEFAULT default_value;
```

## DROPPING COLUMNS

specifying the column to drop using 

```sql
ALTER TABLE mytable
DROP column_to_be_deleted;
```

> `NOTE`
> 
> some databases (including SQLite) don't support this feature. Instead you may have to create a new table and migrate the data over.

## RENAMING TABLES

 To rename the table use the `RENAME TO` clause.

```sql
ALTER TABLE mytable
RENAME TO new_table_name;
```

## Other changes

Each database implementation supports different methods of altering their tables, so it's always best to consult your database docs before proceeding: [MySQL](https://dev.mysql.com/doc/refman/5.6/en/alter-table.html "MySQL Alter Table"), [Postgres](http://www.postgresql.org/docs/9.4/static/sql-altertable.html "Postgres Alter Table"), [SQLite](https://www.sqlite.org/lang_altertable.html "SQLite Alter Table"), [Microsoft SQL Server](https://msdn.microsoft.com/en-us/library/ms190273.aspx "Microsoft SQL Server Alter Table").
