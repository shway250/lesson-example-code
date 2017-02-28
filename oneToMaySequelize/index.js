var express = require('express');
var db = require('./models');
var app = express();

app.set('view engine', 'ejs');


/////////\\\\\\\\\\\
//Just a way to instantiate some data\\
/////////\\\\\\\\\\\
// db.author.create({
//   name: 'Bilbo Baggins'
// }).then(function(data){
//   console.log(data);
// });

app.get('/',function(req, res){
  /////////\\\\\\\\\\\
  //Find an author and create a post. The 'create' in creatPost() is a helper function
  //the 'post' in createPost() is the name of the table we want to create on.
  /////////\\\\\\\\\\\
  // db.author.findOne().then(function(author){
  //   author.createPost({
  //     title: 'Lord of the Rings',
  //     content: 'Bruce Willis was a ghost the whole time!'
  //   }).then(function(post){
  //     res.render('index',{result:post});
  //   })
  // });



/////////\\\\\\\\\\\
//Find an author and all associated posts. The 'get' in getPosts() is a helper function
//the 'posts' in getPosts() is the name of the table we want to search.
/////////\\\\\\\\\\\
//   db.author.findOne().then(function(author){
//     author.getPosts().then(function(posts){
//       res.render('index', {result:posts, author:author});
//     });
//   });


/////////\\\\\\\\\\\
//Eager loading of our data
/////////\\\\\\\\\\\
  db.post.findAll({
    include: [db.author]
  }).then(function(posts){
    res.render('index', {result: posts});
  });
});




app.listen(3000);




















