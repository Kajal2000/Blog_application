const express = require('express');
const blog_app = express.Router();
const blog_appDB  = require("../model/blogDB")

blog_app.post("/postApi",(req,res)=>{
    post_data = {
        blog_id : req.body.blog_id,
        Title : req.body.Title,
        Content : req.body.Content,
        Author_name : req.body.Author_name,
        Feature_img : req.body.Feature_img,
        Date : new Date()
    }
    blog_appDB.insert_data(post_data)
    .then((res_data)=>{
        res.send(res_data)
        console.log("inserted data")
    }).catch((err)=>{
        console.log(err)
    })
})

module.exports = blog_app;
