let  authenticationMiddleware  = require("./authenticationMiddleware")

let initMiddlewares = (app) =>{
    app.use(["/transactions/","/creditCards"],authenticationMiddleware)
}

module.exports = initMiddlewares;