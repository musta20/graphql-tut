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

type Status {
    done: Boolean!
}

`
postQuery  =  `
posts: [Post!]!

`
postMutation = `

createPost(postInput:PostInput): Post

deletePost(postId: ID!): Status!

updatePost(postId: ID!,postInput:PostInput): Post

`


module.exports = { postSchema , postQuery , postMutation}