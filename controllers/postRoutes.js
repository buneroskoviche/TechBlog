const router = require('express').Router();
const { User, Post, Comment } = require('../models');

router.get('/:id', async (req, res) => {
  try {
      const postData = await Post.findByPk(req.params.id, {
        include: [{model: User}, {model: Comment}],
        attributes: { exclude: ['password'] }
      });
      
      const post = postData.get({ plain: true });
      const comments = post.comments;

      res.render('post', {
        post,
        comments,
        loggedIn: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
module.exports = router;