const express = require("express");
const authRoutes = express.Router();

const passport = require("passport");
const bcrypt = require("bcryptjs");

// require the user model !!!!
const User = require("../models/user-model");

authRoutes.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const playlistvideoids = req.body.playlistvideoids;
  const categories = req.body.categories;
  console.log("USERNAME" + username + password);
  if (!username || !password) {
    res.status(400).json({ message: "Provide username and password" });
    return;
  }

  // if (password.length < 7) {
  //   res.status(400).json({
  //     message:
  //       "Please make your password at least 8 characters long for security purposes."
  //   });
  //   return;
  // }

  User.findOne({ username }, (err, foundUser) => {
    if (err) {
      res.status(500).json({ message: "User not found, please try again" });
      return;
    }

    if (foundUser) {
      res
        .status(400)
        .json({ message: "Username already taken., please try again" });
      return;
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    const aNewUser = new User({
      username: username,
      email: email,
      password: hashPass,
      playlistvideoids: playlistvideoids,
      categories: categories
    });

    aNewUser.save(err => {
      console.log("A NEW USER" + aNewUser);
      if (err) {
        res.status(400).json({ message: "Saving user to database went wrong" });
        return;
      }

      // Automatically log in user after sign up
      // .login() here is actually predefined passport method
      req.login(aNewUser, err => {
        if (err) {
          console.log("ERROR" + err);
          res.status(500).json({ message: "Login went wrong, try again" });
          return;
        }

        // Send the user's information to the frontend
        // We can use also: res.status(200).json(req.user);
        res.status(200).json(aNewUser);
      });
    });
  });
});

authRoutes.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, theUser, failureDetails) => {
    if (err) {
      res
        .status(500)
        .json({ message: "Something went wrong authenticating user" });
      return;
    }

    if (!theUser) {
      // "failureDetails" contains the error messages
      // from our logic in "LocalStrategy" { message: '...' }.
      res.status(401).json(failureDetails);
      return;
    }

    // save user in session
    req.login(theUser, err => {
      if (err) {
        res.status(500).json({ message: "Session save went bad." });
        return;
      }

      // We are now logged in (that's why we can also send req.user)
      res.status(200).json(theUser);
    });
  })(req, res, next);
});

authRoutes.post("/logout", (req, res, next) => {
  // req.logout() is defined by passport
  req.logout();
  res.status(200).json({ message: "Log out successful" });
});

//  if there is a session that has a user associated with it, return this associated user
authRoutes.get("/loggedin", (req, res, next) => {
  // req.isAuthenticated() is defined by passport
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }
  res.status(403).json({ message: "Unauthorized" }); // Achtung: bei jedem Server-Neustart wird man ausgeloggt, wenn man nicht MongoStore oder CookieStore verwendet
});

// find User, then push the video ID into their fav videos array
// authRoutes.post("/user_playlist", (req, res, next) => {
//   console.log("i am in the backend", req.body.videoToAdd);
//   console.log(req.user);

// User.findOne({ username });
// User.findById(req.user._id, function(err, user) {
// if (!username) {
//   return res.redirect("/");
// } else {
//   req.user.playlistvideoids.push("Eofta5EU5vg");
// }
// });

// authRoutes.get("/user_playlist", (req, res, next) => {});

module.exports = authRoutes;
