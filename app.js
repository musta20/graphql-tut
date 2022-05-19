const express = require('express');

const app = express();

const qlSchema = require('module/schema');

const qlResolver = require('module/resolver');

app.use(express.json());

app.use(express.urlencoded({extended:true}));

const graphqlHttp  = require("express-graphql");


app.use('/api',graphqlHttp({
    schema:qlSchema,
    rootValue:qlResolver,
    graphiql:true
}))


