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
