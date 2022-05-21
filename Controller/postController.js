postSchema = `

type Post {
    _id: ID!
    title:String!
    post:String!
    createdAt: String!
    updatedAt: String!
}

input PostInput {
    title:String!
    post:String!
}


`
postQuery  =    `
posts: [Post!]!
`
postMutation = `

createPost(postInput:PostInput): Post

deletePost(postId: ID!): Post

updatePost(postInput:PostInput): Post

`


module.exports = { postSchema , postQuery , postMutation}