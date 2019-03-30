const express = require("express");
const router = express.Router();
const User = require("../models/user-model");
const bodyParser = require("body-parser");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.post("/", (req, res, next) => {
  let user = req.body.user;
  let video = req.body.videoToAdd;

  let q=req.body.q
  let categoryName= req.body.categoryName
  let categoryIcon=req.body.categoryIcon


  User.findById(user._id).then(FoundUser => {
    FoundUser.updatePlaylist(video);
    FoundUser.updateCategoryList(q,categoryName,categoryIcon);
  });
});

router.post("/user_playlist", (req, res, next) => {
  let user = req.body.user;
  let video = req.body.videoToDelete;
  User.findById(user._id).then(FoundUser => {
    FoundUser.deleteVideo(video);
  });
});

module.exports = router;
