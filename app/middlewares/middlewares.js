let authenticationMiddleware = require("./authenticationMiddleware");

let initMiddlewares = (app) => {
    app.use((req, res, next) => {
        if (req.path.startsWith("/products/") && req.path !== "/products/categories/count") {
            return authenticationMiddleware(req, res, next);
        }
        next();
    });

    // Middleware que protege otras rutas sensibles
    app.use(["/transactions/", "/creditCards"], authenticationMiddleware);
};

module.exports = initMiddlewares;
