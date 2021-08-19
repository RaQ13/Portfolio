const paginationData = require('./WhoWeHelpData.json');
const usersData = require('./Users.json');

module.exports = () => ({
    data: paginationData,
    users: usersData
})