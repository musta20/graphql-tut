'use strict;'
const { mongoose }  = require('./Db');

const schema = new mongoose.Schema({
    
    title:{
        type:String,
        min:5,
        max:55,
        required:true
    },
    post:{
        type:String,
        min:55,
        max:255,
        required:true
    },
})

const PostModel = mongoose.model('post',schema);

module.exports ={

    createPost : async({ title , post })=>{

        await new PostModel({ title , post }).save();

        return { title , post }

    },

    deletePost : async(ID)=>{
        await PostModel.findByIdAndRemove(ID);
        return { ID }

    },
   
    updatePost : async({ ID , title , post })=>{

        await PostModel.findByIdAndUpdate(ID,{ ID , title , post });

        return { ID , title , post }

    }

}


