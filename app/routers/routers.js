let  productsRouter  = require("./productsRouter")
let  usersRouter  = require("./usersRouter")
let  transactionRouter = require("./transactionRouter")
let creditCardsRouter = require("./creditCardsRouter")
let offersRouter = require("./offersRouter")

let initRouters = (app) =>{
    app.use("/products/",productsRouter)
    app.use("/users/",usersRouter)
    app.use("/transactions/",transactionRouter)
    app.use("/creditCards/",creditCardsRouter)
    app.use("/offers/",offersRouter)
}

module.exports = initRouters;