DROP TABLE IF EXISTS orders;

CREATE TABLE orders(
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES registration(id),
    cake_id INT NOT NULL REFERENCES description(id),
    size VARCHAR NOT NULL ,
    message VARCHAR NOT NULL
);
