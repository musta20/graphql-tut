const { buildSchema } = require('graphql');

const { userSchema , userQuery , userMutation} = require('../Controller/userController')
const { postSchema , postQuery , postMutation} = require('../Controller/postController')

module.exports =buildSchema(`
${userSchema}

${postSchema}

type RootQuery {
    ${userQuery}

    ${postQuery}

}

type RootMutation {

    ${userMutation}

    ${postMutation}

}

schema {
    query :RootQuery
    mutation : RootMutation
}



`)