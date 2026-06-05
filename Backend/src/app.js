const express = require('express')
const multer = require('multer')
const app= express();
const uploadFile = require('../src/service/storage.service')
const postModel = require('./models/post.model')
const cors = require("cors")

app.use(express.json());
app.use(cors())


const upload = multer({storage:multer.memoryStorage()})

app.post('/create-post',upload.single('image'), async (req, res)=>{
    console.log(req.body);
    console.log(req.file);

    const result = await uploadFile(req.file);

    const post = await postModel.create({
        image:result.url,
        caption:req.body.caption
    })

    

    res.status(200).json({
        success:true,
        message:"Image Uploaded",
        url:result.url,
        post
    })
   

})


app.get('/posts',async (req,res)=>{

    const posts = await postModel.find()

    return res.status(200).json({
        message:"Post fetched successfully",
        posts
    })
})


module.exports= app;