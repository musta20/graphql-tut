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
        required:true,
        unique: true 

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
    user: async()=>{
       const data = await UserModel.find()
       
       return data.map(doc=>{return {
        name : doc.name,
        email : doc.email
    }})
        
    },

    createUser : async({  userInput })=>{

        await new UserModel({ name:userInput.name , email:userInput.email , password:userInput.password }).save();

        return { name:userInput.name , email : userInput.email}

    },

    deleteUser : async(ID)=>{
        await UserModel.findByIdAndRemove(ID);
        return { done:true }

    },
   
    updateUser : async({ ID , title , User })=>{

        await UserModel.findByIdAndUpdate(ID,{ ID , title , User });

        return { ID , title , User }

    }

}

