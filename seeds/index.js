const sequelize = require('../config/connection');
const seedPosts = require('./postSeeds');
const seedComments = require('./commentSeeds');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedPosts();
    await seedComments();
}

seedAll();