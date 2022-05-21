
const PostResolver = require('../Model/postModle');
const UserResolver = require('../Model/userModle');

const MainResolver = {
    ...PostResolver,
    ...UserResolver
}

module.exports = MainResolver;