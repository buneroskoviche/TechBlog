const router = require('express').Router();
const { User, Post, Comment } = require('../models');

router.get('/:id', async (req, res) => {
  try {
      const postData = await Post.findByPk(req.params.id, {
        include: [{model: User}, {model: Comment, include: {model: User}}],
        attributes: { exclude: ['password'] }
      });

      const post = postData.get({ plain: true });
      const comments = post.comments;

      res.render('post', {
        post,
        comments,
        loggedIn: req.session.logged_in,
      });
    } catch (e) {
      console.log(e);
      res.status(500).json(e);
    }
});

router.post('/:id/comments', async (req, res) => {
  try {
    await Comment.create({
      text: req.body.text,
      post_id: req.params.id,
      user_id: req.session.user_id,
    });
    res.status(201).json({message: 'Comment added.'});
  } catch (e) {
    res.status(500).json(e);
  }
});

router.post('/', async (req, res) => {
  try {
    await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
    });
    res.status(201).json({message: 'Post created.'})
  } catch (e) {
    res.status(500).json(e);
  }
})
  
module.exports = router;