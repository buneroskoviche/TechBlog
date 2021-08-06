const {Comment} = require('../models');

const commentData = [
    {
        post_id: 1,
        text: `You can be sure that I will never break any rules. Promise!`
    },
    {
        post_id: 1,
        text: `I'd rather use async/await than Promises. XD LOLOLOLOL`
    },
    {
        post_id: 2,
        text: `One time I had to make a blog website in 3 days. That was stressful.`
    },
    {
        post_id: 2,
        text: `I learned JavaScript when I was 2 years old. My 3rd birthday party was coding themed and I ran the openPresent func. Haha hehe!`
    },
    {
        post_id: 3,
        text: `Bruv I got no idea. You'd be better off going to stackoverflow`
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;