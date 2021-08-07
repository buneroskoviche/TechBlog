const router = require('express').Router();
const { User, Post } = require('../models');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{model: User}],
      attributes: { exclude: ['password'] }
    });

    const posts = postData.map(post => post.get({ plain: true }));

    res.render('home', {
      posts,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/dashboard', async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
    return;
  }

  try {
    const postData = await Post.findAll({
      where: { user_id: req.session.user_id},
    });

    const posts = postData.map(post => post.get({ plain: true }));

    res.render('dashboard', {
      posts,
      loggedIn: req.session.logged_in,
    });

  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
  
});
module.exports = router;
