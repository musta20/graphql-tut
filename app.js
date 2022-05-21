require('dotenv').config()

const express = require('express');

const app = express();

const MainSchema = require('./Schema/MainSchema');

const MainResolver = require('./Schema/MainResolver');

const {graphqlHTTP}  = require('express-graphql');

const PORT = process.env.PORT

app.use(express.json());

app.use(express.urlencoded({extended:true}));


app.use('/api',graphqlHTTP({
    schema:MainSchema,
    rootValue:MainResolver,
    graphiql:true
}))


app.listen(PORT,()=>{
    console.log('\x1b[33m%s\x1b[0m',`NODEJS SERVER RUNNING ON PORT:${PORT}`);

})