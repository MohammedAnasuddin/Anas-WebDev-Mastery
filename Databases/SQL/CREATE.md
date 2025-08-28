# Creating Tables

Create a new database table using the `CREATE TABLE` statement.

```sql
CREATE TABLE IF NOT EXISTS mytable (
    column DataType TableConstraint DEFAULT default_value,
    another_column DataType TableConstraint DEFAULT default_value,
    …
);
```

The structure of the new table is defined by its *table schema*, which defines a series of columns.

Each column has a 

1. Name

2. The type of data allowed in that column

3. An *optional* table constraint on values being inserted

4. An optional default value.

> `NOTE`
> 
> If there already exists a table with the same name, the SQL implementation will usually throw an error. To skip creating a table if one exists, you can use the `IF NOT EXISTS` clause.



## Table Data Types

1. INTEGER ( -2.1B to 2.1B) or (0 to 4.2B)

2. BOOLEAN (TRUE / FALSE)

3. FLOAT :   7 decimal digits of precision.

4. DOUBLE :  15-16 decimal digits of precision.

5. CHAR: Fixed Length String defined during Creation

6. VARCHAR: Variable Length String

7. DATE: YYYY-MM-DD

8. DATE TIME :  YYYY-MM-DD hh:mm:ss

9. BLOB:  Binary Data





## Table Constraints

Each column can have additional restrictions than type of data on it which limit what values can be inserted into that column.



1. PRIMARY KEY :  Values in this column are unique, and *each value can be used to identify a single row in this table.*

2. AUTOINCREMENT:  Value is automatically filled in and incremented with each row insertion. WORKS ONLY FOR INTEGER DATA TYPE

3. UNIQUE:  Values in this column have to be unique, so you can't insert new row with the existing value in this column of the another row.

4. NOT NULL:  Inserted value can not be `NULL`.

5. FOREIGN KEY:  This is a consistency check which ensures that *each value in this column corresponds to another value in a column in another table.*




































