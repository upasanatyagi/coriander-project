const spicedPg = require("spiced-pg");
const db = spicedPg(
    process.env.DATABASE_URL ||
        `postgres:postgres:postgres@localhost:5432/cakes`
);
module.exports.registerUser = function(first, last, email, password) {
    return db.query(
        `INSERT INTO registration (first,last, email, password) VALUES ($1,  $2, $3 ,$4)
        RETURNING id `,
        [first, last, email, password]
    );
};

module.exports.login = function(email) {
    return db.query(
        `SELECT id,password AS hash FROM registration WHERE email=$1
        `,
        [email]
    );
};
module.exports.getInfo = function(id) {
    return db.query(
        `SELECT id,title,description,image_url FROM description WHERE id=$1
        `,
        [id]
    );
};
module.exports.postInfo = function(id, message, size, cake_id) {
    return db.query(
        `INSERT INTO orders (user_id,message,size,cake_id) VALUES ($1, $2, $3, $4)
        RETURNING *`,
        [id, message, size, cake_id]
    );
};
module.exports.checkoutinfo = function(id, cake_id) {
    console.log("db id, cake_id", id, cake_id);
    return db.query(
        `SELECT DISTINCT ON(image_url) image_url,title,size,message,first,last
        FROM description
        JOIN orders
        ON cake_id=description.id
        JOIN registration
        ON user_id=registration.id
        WHERE registration.id=$1 AND cake_id=$2
        `,
        [id, cake_id]
    );
};
