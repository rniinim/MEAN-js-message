const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "*"
  );
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

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added'
  });
});

app.use('/api/posts' ,(req, res, next) => {
  const posts= [
    {
      id: 'fdasf323',
      title: 'Server-side post',
      content:'coming from server'
    },
    {
      id: 'dasf342',
      title: 'Server-side post 2',
      content:'coming from server 2'
    },
    {
      id: 'fds32423',
      title: 'Server-side post 3',
      content:'coming from server 3'
    }
  ];
  res.status(200).json({
    message: 'posts ferched',
    posts: posts
  });
});

module.exports = app; 
