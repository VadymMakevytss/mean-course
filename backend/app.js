const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Post = require("./models/posts");

const app = express();

mongoose
  .connect(
    "mongodb+srv://angular_vadym:X3nGb9upKqap5x8W@vadymclaster.at5xs.mongodb.net/node-angular?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to DataBase");
  })
  .catch(() => {
    console.log("Connection failed");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

// Save data to db save() - method provided by mongoose package
app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  post.save().then((createdPost) => {
    res.status(201).json({
      message: "Post added succesfully!",
      postId: createdPost._id,
    });
  });
});

// Fetching data from DB
app.get("/api/posts", (req, res, next) => {
  Post.find().then((documents) => {
    res.status(200).json({
      message: "Posts fetched succesfully",
      posts: documents,
    });
  });
});

// Delete document from DB
app.delete("/api/posts/:id", (req, res, next) => {
  Post.deleteOne({ _id: req.params.id }).then((result) => {
    console.log(result);
    res.status(200).json({ message: "Post Deleted!" });
  });
});

module.exports = app;