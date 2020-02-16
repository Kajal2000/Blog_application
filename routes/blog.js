const express = require('express');
const blog_app = express.Router();
const blog_appDB  = require("../model/blogDB")

var jwt = require("jsonwebtoken")

// first part
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

// sec part
blog_app.post("/reg",(req,res)=>{
    data = {
        registration_id : req.body.registration_id,
        admin_id : req.body.admin_id,
        name : req.body.name,
        email : req.body.email,
        password : req.body.password,
        boolean : req.body.boolean
    }
    blog_appDB.insert_data_login(data)
    .then((res_data)=>{
        res.send(res_data)
        console.log("inserted data")
    }).catch((err)=>{
        console.log(err)
    })
})

blog_app.put("/login/:registration_id",(req,res)=>{
    let registration_id = req.params.registration_id
    email = req.body.email,
    password = req.body.password
    blog_appDB.login_email(email)
    .then((login_data)=>{
        if (login_data.length == 0){
            let booleandata = "False"
            data = {
                boolean : booleandata
            }
            blog_appDB.update_data_login(data,registration_id)
            .then((res_data)=>{
                res.send(res_data)
                console.log("updated data")
            }).catch((err)=>{
                console.log(err)
            })
        }else{blog_appDB.login_password(password)
            .then((login_data)=>{
            if (login_data.length == 0){
                res.send("Wrongboolean_data h password")
            }else{
                let newToken = jwt.sign({ "blog_app" : login_data }, "kajal")
                        let boolean_data = "True"
                        data = {
                            boolean : boolean_data
                        }
                        blog_appDB.update_data_login(data,registration_id)
                        .then((res_data)=>{
                            res.send(res_data)
                            console.log("updated data")
                        }).catch((err)=>{
                            console.log(err)
                        })
                }
            })
        }
    }).catch((err)=>{
        console.log(err); 
    })
});

blog_app.get("/api/:admin_id",(req,res) => {
    let admin_id = req.params.admin_id
    blog_appDB.getdata(admin_id)
    .then((res_data) => {
        // console.log(res_data)
    let admin_data = res_data[0]["boolean"]
    if (admin_data == "True"){
        blog_appDB.get_Id()
        .then((data)=>{
            let data_id = data[0]["blog_id"]
            if (admin_id == data_id)
                res.send({data_id})
                console.log("Aproved hai")
        }).catch((err)=>{
            console.log(err)
        })
        }
    else{
        console.log("Aproved nhi hua")
    }
    })
})

module.exports = blog_app;
