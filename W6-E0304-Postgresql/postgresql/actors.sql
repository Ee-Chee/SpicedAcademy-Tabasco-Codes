CREATE TABLE actors(
    id SERIAL PRIMARY KEY,
    Name VARCHAR(250) NOT NULL,
    Age INTEGER,
    "Number of Oscars" INTEGER
);

INSERT INTO actors(Name, Age, "Number of Oscars") VALUES ('Leonardo', 41, 1);
INSERT INTO actors(Name, Age, "Number of Oscars") VALUES ('Jennifer Lawrence', 25, 1);
INSERT INTO actors(Name, Age, "Number of Oscars") VALUES ('Samuel L.Jackson', 67, 0);
INSERT INTO actors(Name, Age, "Number of Oscars") VALUES ('Meryl Streep', 66, 3);
INSERT INTO actors(Name, Age, "Number of Oscars") VALUES ('John Cho', 43, 0);

SELECT Name FROM actors WHERE "Number of Oscars" > 1;
SELECT Name FROM actors WHERE Age > 30;

UPDATE actors SET Name='Leonardo DiCaprio' WHERE Name = 'Leonardo';

SELECT * FROM actors;
