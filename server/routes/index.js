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
    // TODO: this should wait for the updatePlaylist & updateCategoryList methods to finish
    res.json(user)
  });
});

router.post("/user_playlist", (req, res, next) => {
  let user = req.body.user;
  let video = req.body.videoToDelete;
  let categoryQuery = req.body.categoryToDelete

  User.findById(user._id).then(FoundUser => {
    FoundUser.deleteVideo(video);
    FoundUser.deleteCategory(categoryQuery);
    // TODO: this should wait for the deleteVideo & deleteCategoryList methods to finish
    res.json(user)
  });
});

module.exports = router;
