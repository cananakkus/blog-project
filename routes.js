// modules
const Router = require('express');

// controllers
const Home = require('./controllers/Home');
const Post = require('./controllers/Post');
const Category = require('./controllers/Category');

const router = Router();

// home
router.get('/', Home.showHome);
// about
router.get('/about', function(req, res) {
    res.render('pages/about', {'title': 'about'});
  }); 

// posts
router.get('/post/:id', Post.showPost);

//category
router.get('/category/:id', Category.showCategory);


//blog
router.get('/blog', function(req, res) {
  res.render('pages/blog', {'title': 'blog'});
}); 

//contact
router.get('/contact', function(req, res){
  res.render('pages/contact', {'title': 'contact'});
});
module.exports = router;
