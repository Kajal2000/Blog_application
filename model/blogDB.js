let knex = require('../connection.js')

let insert_data = (post_data)=>{
    return knex("blog_deatils").insert(post_data)
}

module.exports= {insert_data}