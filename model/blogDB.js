let knex = require('../connection.js')

let insert_data = (post_data)=>{
    return knex("blog_deatils").insert(post_data)
}

// let insert_data_login = (data)=>{
//     return knex("superAdmin_tbl").insert(data)
// }

let insert_data_login = (data)=>{
    return knex("admin_tbl").insert(data)
}

let update_data_login = (data,registration_id)=>{
    return knex("admin_tbl").update(data).where('admin_id',registration_id)
}

var login_email = (email) => {
    return knex.select("*").from("admin_tbl").havingIn("admin_tbl.email",email)
}

var login_password = (password) => {
    return knex.select("*").from("admin_tbl").havingIn("admin_tbl.password",password)
}

let getdata = (admin_id)=>{
    return knex("admin_tbl").select("*").where("admin_tbl.admin_id",admin_id)
}

let get_Id = ()=>{
    return knex("blog_deatils").select("*")
}
module.exports= {insert_data,insert_data_login,login_email,login_password,update_data_login,getdata,get_Id}