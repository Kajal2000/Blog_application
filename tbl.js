let knex = require("./connection.js")

knex.schema.createTable("blog_deatils", (table) => {
    table.increments("blog_id")
    table.string("Title")
    table.string("Content")
    table.string("Author_name")
    table.string("Feature_img")
    table.string("Date")

}).then(()=>{
    console.log("created tbl")
}).catch((err)=>{
    console.log(err)
})

knex.schema.createTable("superAdmin_tbl", (table) => {
    table.increments("superAdmin_id")
    table.string("superAdmin_name")
    table.string("email")
    table.string("password")

}).then(()=>{
    console.log("created tbl")
}).catch((err)=>{
    console.log(err)
})
// reg tbl
knex.schema.createTable("admin_tbl", (table) => {
    table.integer("registration_id")
    table.string("boolean")
    table.string("name")
    table.string("email")
    table.string("password")
    table.increments("admin_id")

}).then(()=>{
    console.log("created tbl")
}).catch((err)=>{
    console.log(err)
})
