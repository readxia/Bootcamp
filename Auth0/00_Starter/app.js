const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3001;

const { auth, requiresAuth } = require('express-openid-connect')

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.secret,
  baseURL: process.env.baseURL,
  clientID: process.env.clientID,
  issuerBaseURL: process.env.issuerBaseURL
}

console.log(config)

// the auth router attaches /login, /logout and /signup routes to the baseURL
app.use(auth(config))

// body parser code. I think we only need the urlencoded
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(function (req, res, next) {
  res.locals.user = req.oidc.user
  next()
})

// process the request to load the newsfeed page
app.get(
    "/newsfeed", 
    requiresAuth(), //makes it protected
    function(req, res) {
        res.render("newsfeed.ejs", {
          user: req.user && req.user.username || false
        });
});

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.render("home.ejs", {
    isAuthenticated: req.oidc.isAuthenticated(),
    user: req.oidc.user
  });
});

// start the app and keep listening on port 3000
app.listen(port, function(){
    console.log(`App is running on port:${port}`);
});

