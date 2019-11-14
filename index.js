const express = require("express");
const app = express();
const compression = require("compression");
const bcrypt = require("./bcrypt");

const cookieSession = require("cookie-session");
const csurf = require("csurf");
const db = require("./database");

app.use(compression());

app.use(express.static("./public"));
app.use(express.json());
app.use(
    express.urlencoded({
        extended: false
    })
);

if (process.env.NODE_ENV != "production") {
    app.use(
        "/bundle.js",
        require("http-proxy-middleware")({
            target: "http://localhost:8081/"
        })
    );
} else {
    app.use("/bundle.js", (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

const cookieSessionMiddleware = cookieSession({
    secret: `I'm always angry.`,
    maxAge: 1000 * 60 * 60 * 24 * 90
});

app.use(cookieSessionMiddleware);

/////////paypal integration///
// const braintree = require('braintree');
// var gateway = braintree.connect({
//   accessToken: "access_token$sandbox$997qq868sxvbx599$8450f1e3f5f3286e434edf4608151517"
// });
// app.get("/client_token", function (req, res) {
//   gateway.clientToken.generate({}, function (err, response) {
//     res.send(response.clientToken);
//   });
// });
//
// // Create a client.
// braintree.client.create({
//   authorization: CLIENT_AUTHORIZATION
// }, function (clientErr, clientInstance) {
//
//   // Stop if there was a problem creating the client.
//   // This could happen if there is a network error or if the authorization
//   // is invalid.
//   if (clientErr) {
//     console.error('Error creating client:', clientErr);
//     return;
//   }
//
//   // Create a PayPal Checkout component.
//   braintree.paypalCheckout.create({
//     client: clientInstance
//   }, function (paypalCheckoutErr, paypalCheckoutInstance) {
//
//     // Stop if there was a problem creating PayPal Checkout.
//     // This could happen if there was a network error or if it's incorrectly
//     // configured.
//     if (paypalCheckoutErr) {
//       console.error('Error creating PayPal Checkout:', paypalCheckoutErr);
//       return;
//     }
//
//     // Set up PayPal with the checkout.js library
//     paypal.Button.render({
//       env: 'production', // or 'sandbox'
//
//       payment: function () {
//         return paypalCheckoutInstance.createPayment({
//           // Your PayPal options here. For available options, see
//           // http://braintree.github.io/braintree-web/current/PayPalCheckout.html#createPayment
//         });
//       },
//
//       onAuthorize: function (data, actions) {
//         return paypalCheckoutInstance.tokenizePayment(data, function (err, payload) {
//           // Submit `payload.nonce` to your server.
//         });
//       },
//
//       onCancel: function (data) {
//         console.log('checkout.js payment cancelled', JSON.stringify(data, 0, 2));
//       },
//
//       onError: function (err) {
//         console.error('checkout.js error', err);
//       }
//     }, '#paypal-button').then(function () {
//       // The PayPal button will be rendered in an html element with the id
//       // `paypal-button`. This function will be called when the PayPal button
//       // is set up and ready to be used.
//     });
//
//   });
//
// });
//

/////////paypal integration end///

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

app.get("/displays/:id", (req, res) => {
    console.log("req.params.id", req.params.id);
    db.getInfo(req.params.id)
        .then(result => {
            console.log("info index", result.rows);
            res.json(result.rows);
        })
        .catch(e => {
            console.log("e", e);
        });
});
app.post("/sizemsg", async (req, res) => {
    console.log("+++++insert req.body", req.body);
    db.postInfo(
        req.session.userId,
        req.body.msg,
        req.body.size,
        req.body.cake_id
    )
        .then(({ rows }) => {
            console.log("----index rows", rows);
            res.json(rows);
        })
        .catch(e => {
            console.log("error in post ", e);
        });
});

app.get("/checkouts/:id", (req, res) => {
    const cake_id = req.params.id;
    console.log("checkout i am here cake_id", cake_id);
    db.checkoutinfo(req.session.userId, cake_id)
        .then(({ rows }) => {
            console.log("******checkout rows", rows);
            res.json(rows);
        })
        .catch(e => {
            console.log("erorr in checkout", e);
        });
});

app.get("/logout", function(req, res) {
    req.session = null;
    res.redirect("/");
});

app.get("*", (req, res) => {
    if (!req.session.userId) {
        res.redirect("/welcome");
    } else {
        res.sendFile(__dirname + "/index.html");
    }
});

app.listen(8080, function() {
    console.log("I'm listening.");
});
