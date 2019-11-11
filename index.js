const express = require('express');
const app = express();
const compression = require('compression');
const bcrypt = require("./bcrypt");

const cookieSession = require("cookie-session");
const csurf = require("csurf");
const db = require("./database");


app.use(compression());

app.use(express.static('./public'));
app.use(express.json());

if (process.env.NODE_ENV != 'production') {
    app.use(
        '/bundle.js',
        require('http-proxy-middleware')({
            target: 'http://localhost:8081/'
        })
    );
} else {
    app.use('/bundle.js', (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

const cookieSessionMiddleware = cookieSession({
    secret: `I'm always angry.`,
    maxAge: 1000 * 60 * 60 * 24 * 90
});

app.use(cookieSessionMiddleware);

app.get("/welcome", function(req, res) {
    if (req.session.userId) {
        res.redirect("/");
    } else {
        res.sendFile(__dirname + "/index.html");
    }
});

app.post("/register", (request, response) => {
    console.log(
        "index.register.post   >>>>>>>>>>>>>>>>>>>>>>>>>>.",
        request.body
    );
    let { first, last, email, password } = request.body;

    console.log("first,last,email,password", first, last, email, password);
    bcrypt
        .hash(password)
        .then(hash => {
            db.registerUser(first, last, email, hash) //password already encrypted as result
                .then(newUser => {
                    console.log("newUser", newUser);
                    request.session.userId = newUser.rows[0].id;
                    response.json({ success: true });
                    
                })
                .catch(e => {
                    console.log(e);
                    
                });
        })
        .catch(e => {
            console.log(e);
            response.sendStatus(500);
        });
});

app.post("/login", (request, response) => {
    console.log("................ inside login");
    let userId;
    let { password, email } = request.body;
    db.login(email)
        .then(result => {
            console.log("................ inside login::: first then", result);
            let { id, hash } = result.rows[0];
            userId = id;
            console.log(
                ">>>>.index.login.post userid and passwordhash ",
                userId,
                hash
            );

            return bcrypt
                .compare(password, hash)
                .then(result => {
                    console.log(result);
                    return result;
                })
                .catch(e => {
                    console.log("index.login.post.bcrypt.error ", e);
                    response.sendStatus(500);
                });
        })
        .then(authorised => {
            "................ auth inside login::: 2nd thllllllen";
            if (!authorised) {
                return response.sendStatus(500);
            }
            request.session.loggedIn = "true";
            request.session.userId = userId;
            response.json({ success: true });
        })

        .catch(e => {
            console.log(e);
            response.sendStatus(500);
        });
});

app.get("/logout", function(req, res) {
    req.session = null;
    res.redirect("/");
});

app.get('*', (req, res) => {
    if (!req.session.userId) {
        res.redirect('/welcome');
    } else {
        res.sendFile(__dirname + '/index.html');
    }
});

app.listen(8080, function() {
    console.log("I'm listening.");
});
