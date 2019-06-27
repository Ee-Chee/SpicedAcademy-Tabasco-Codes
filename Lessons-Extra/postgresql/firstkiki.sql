-- database-relational or nosql
-- relational-tables (postgres, mysql)
-- nosql-key-value (Redis, mongoDB)
DROP TABLE IF EXISTS cities;

CREATE TABLE cities(
    id SERIAL PRIMARY KEY,
    city VARCHAR(250) NOT NULL, --not null so user must input something here otherwise error prompted
    state VARCHAR(250),
    country VARCHAR(250),
    population INTEGER,
    description TEXT --no char limit for input, use TEXT
);

INSERT INTO cities(city, state, population) VALUES ('Barlin', 'Barlin', 3000000);
INSERT INTO cities(city, state, population) VALUES ('Berlin', 'Berlin', 4000000);
INSERT INTO cities(city, state, population) VALUES ('lin', 'Ber', 5000000);
INSERT INTO cities(city, country, description) VALUES ('Ber', 'lin', 'hola');
-- -execute from a file-----------------------------------------------------
-- psql kiki -f sql/firstkiki.sql --kiki is a databasename
-- DROP TABLE IF EXISTS cities --add new column
-- -execute from command line------------------------------------------------
-- psql kiki --kiki is database name
-- copy paste
-- --list of relations
-- \dt
--
-- --reading data from a table;
-- SELECT * FROM cities;
-- SELECT city, description FROM cities;
-- SELECT * FROM cities WHERE id = 2;
-- SELECT * FROM cities WHERE city = 'Berlin';
-- SELECT * FROM cities WHERE id >1;
--
-- --create a new entry/data in my cities table
-- INSERT INTO cities(city, state, population) VALUES ('Berlin', 'Berlin', 3000000);
-- --single quote
--
-- --change content
-- UPDATE cities SET city = 'New York' WHERE city='new york'; --if no WHERE clause, all city column will be changed to 'New York'
--
-- DELETE FROM cities WHERE city = 'New York';
--
-- UPDATE cities SET state = '' WHERE id = 3; --string use empty string '', number use NULL

-----------------------------------------------additional
--ALTER TABLE tablename DROP ID; --delete whole column of ID *not recommended
-- ; must be executed in sql e.g. postgres=# ...;
--sudo su postgres, the $ sign means you are logging in as user named postgres.
--psql always come next with a database name!
--DROP USER "user_name";
--\du to check created usernames and their privileges
--one username has many database. Every database has many relations or tables.
--\conninfo checking info: database name, user, port...
--\list listing databases and its user.
--DROP DATABASE "database_name";
--ALTER USER user_name RENAME TO new_name; --cannot change session username(logging-in)
