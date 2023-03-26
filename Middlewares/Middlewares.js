// Initialize created modules here

const Authentication = require('./Authentication/Authentication');

const Middlewares = (app, JWT) => {
    Authentication(app, JWT);
}

module.exports = Middlewares;