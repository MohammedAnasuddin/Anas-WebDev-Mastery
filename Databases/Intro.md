# Databases

All the values(variables) generated during execution are allotted in the Memory. Which is temporary.

To store values , data permanently on Hard drive/Server so that data can be reused we use Databases.

> No Database is wrong or more effective. Select your database based on your project requirements and the final goal.

## Types of Databases

1. SQL

2. No-SQL (Not **ONLY** SQL) -> More than SQL

3. Others

> `NOTE`
> 
> Never ever perform operations on Database from the Frontend .
> Use Server to process the request and then operate on Database.

## ORM

Object Relation Mapper

Layer that Connects the Server to DB for easy processing. Eg: mongoose and Prisma.

## SQL v/s NO-SQL

**“SQL databases are best suited for structured data and complex relationships.”**  
**“NoSQL databases are better for flexible data models and horizontal scalability.”**



# DDL , DML , DQL




> **DDL — Data Definition Language**  
> Used to define or change the structure of the database  
> **Examples:** `CREATE`, `ALTER`, `DROP`, `TRUNCATE`

---

> **DML — Data Manipulation Language**  
> Used to insert, update, or delete data  
> **Examples:** `INSERT`, `UPDATE`, `DELETE`

---

> **DQL — Data Query Language**  
> Used to fetch data from the database  
> **Example:** `SELECT`



**“A table is a structured collection of data organized into rows and columns.”**  
**“A row represents a single record or entity within the table.”**






## KEys

**“A primary key is a column (or set of columns) that uniquely identifies each row in a table.”**  
**“It ensures data integrity by preventing duplicate or null values.”**


**“A foreign key is a column in one table that references the primary key of another table.”**  
**“It is used to establish and enforce a relationship between two tables.”**




# Relations

- **One-to-One**  
  One record ↔ one record  
  (e.g., user ↔ profile)

- **One-to-Many**  
  One record ↔ many records  
  (e.g., user ↔ orders)

- **Many-to-Many**  
  Many records ↔ many records  
  (e.g., students ↔ courses)  
  👉 implemented using a **junction (join) table**




## JOINS

**“A JOIN is used to combine rows from two or more tables based on a related column between them.”**  
**“It allows us to retrieve related data that is stored across different tables.”**
