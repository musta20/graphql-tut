'use strict;'
const { mongoose }  = require('./Db');

const schema = new mongoose.Schema({
    
    name:{
        type:String,
        min:5,
        max:55,
        required:true
    },
    email:{
        type:String,
        min:55,
        max:255,
        required:true
    },
    password:{
        type:String,
        min:55,
        max:255,
        required:true
    },
})

const UserModel = mongoose.model('User',schema);

module.exports ={

    createUser : async({ name , email , password })=>{

        await new UserModel({ name , email , password }).save();

        return { name , email }

    },

    deleteUser : async(ID)=>{
        await UserModel.findByIdAndRemove(ID);
        return { ID }

    },
   
    updateUser : async({ ID , title , User })=>{

        await UserModel.findByIdAndUpdate(ID,{ ID , title , User });

        return { ID , title , User }

    }

}

