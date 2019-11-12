DROP TABLE IF EXISTS description;

CREATE TABLE description(
    id SERIAL PRIMARY KEY,
    image_url VARCHAR NOT NULL,
    title VARCHAR NOT NULL,
    description VARCHAR NOT NULL
);
