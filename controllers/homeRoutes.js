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
      loggedIn: false,
      // loggedIn: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/signup', async (req, res) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.status(200).json(newUser);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
