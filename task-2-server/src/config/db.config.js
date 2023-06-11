

module.exports = {
    HOST : "my-database.c3biy0ze8chm.us-east-1.rds.amazonaws.com",
    USER : "admin",
    password : "sahil123",
    database : "Notes",
    dialect : "mysql",

    pool : {
        max : 5,
        min : 0,
        acquire : 30000,
        idle : 10000
    }
}