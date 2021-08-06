const { Post } = require('../models');

const postData = [
    {
        id: 2,
        title: 'JavaScript Sure is Great!',
        content: 
            'I just have so much fun with it. What is your favorite memory with JavaScript?',
    },
    {
        id: 3,
        title: `What's up with React?`,
        content:
            `It seems really confusing to me. Can anyone explain it? I don't have time to look it up myself.`
    },
    {
        id: 1,
        title: `Welcome to the site`,
        content: 
            `Be sure to follow all the rules or you will get banned with no warning.`
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;