const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: String,
    email: String,
    password: String,
    playlistvideoids: []
  },
  {
    timestamps: true,
    // modify the JSON produced by each of your models to hide the password and stuff that´s not necessary for the front end
    toJSON: {
      transform: function(doc, ret) {
        delete ret.password;
        delete ret.__v;
        return ret;
      }
    }
  }
);

userSchema.methods.updatePlaylist = function updatePlaylist(videoID) {
  this.updateOne(
    {
      $addToSet: {
        playlistvideoids: videoID
      }
    },
    {
      safe: true,
      upsert: true
    },
    function(err) {
      if (err) {
        console.log("THIS IS AN ERROR", err);
      }
    }
  );
};

userSchema.methods.deleteVideo = function deleteVideo(videoID) {
  this.updateOne(
    {
      $pull: {
        playlistvideoids: videoID
      }
    },
    {
      safe: true,
      upsert: true
    },
    function(err) {
      if (err) {
        console.log("THIS IS AN ERROR", err);
      }
    }
  );
  console.log("this works");
};

const User = mongoose.model("User", userSchema);
module.exports = User;
