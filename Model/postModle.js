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
    posts: async()=>{
        const data = await PostModel.find()
        
        return data.map(doc=>{return {
            _id : doc.id,
            title : doc.title,
            post : doc.post
     }})
         
     },

    createPost : async({ postInput })=>{
        console.log(postInput)

        await new PostModel({ title:postInput.title , post:postInput.post }).save();

        return { title:postInput.title , post:postInput.post }

    },

    deletePost : async({postId})=>{

        await PostModel.findByIdAndRemove(postId);
      
        return {done:true}

    },
   
    updatePost : async({ postId,postInput })=>{

        await PostModel.findByIdAndUpdate(postId,{ title:postInput.title , post:postInput.post });

        return {  title:postInput.title , post:postInput.post }

    }

}


