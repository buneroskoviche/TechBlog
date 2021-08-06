const router = require('express').Router();
const { User, Post } = require('../models');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{model: User}],
      attributes: { exclude: ['password'] }
    });

    const posts = postData.map(post => post.get({ plain: true }));

    // res.render('homepage', {
    //   users,
    //   loggedIn: req.session.loggedIn,
    // });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  // res.render('login');
});

module.exports = router;
