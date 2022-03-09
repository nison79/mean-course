const express = require("express");

const app = express();

app.use("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "gqreg4qh",
      title: "First server-side post",
      content: "this is coming from the server",
    },
    {
      id: "grqh54jgrrga",
      title: "Second server-side post",
      content: "this is coming from the server!!!!!",
    },
  ];
  res.status(200).json({
    success: true,
    posts: posts,
  });
});

module.exports = app;
