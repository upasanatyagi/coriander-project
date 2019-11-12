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
