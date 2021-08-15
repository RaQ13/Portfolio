const paginationData = require('./WhoWeHelpData.json');
const contactData = require('./ContactBase.json');

module.exports = () => ({
    data: paginationData,
    users: contactData
})