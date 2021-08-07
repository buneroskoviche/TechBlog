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
      console.log(comments);

      res.render('post', {
        post,
        comments,
        loggedIn: true,
        // loggedIn: req.session.logged_in,
      });
    // res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
module.exports = router;