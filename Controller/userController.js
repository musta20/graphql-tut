userSchema = `

type User {
    _id: ID!
    name:String!
    email:String!
    password:String!
    createdAt: String!
    updatedAt: String!
}

input UserInput {
    name:String!
    email:String!
    password:String!
}


`
userQuery  =    `
user: [User!]!
`
userMutation = `

createUser(userInput:UserInput): User

deleteUser(userId: ID!): User

updateUser(userInput:UserInput): User

`
module.exports = { userSchema , userQuery , userMutation}