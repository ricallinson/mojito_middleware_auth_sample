/**
 * Export a function which can create the handler.
 * @param {Object} config Data to configure the handler.
 * @return {Object} The newly constructed handler.
 */
module.exports = function(req, res, next) {

    var command = {};

    /*
     * Check if the route said we should auth
     */
    if (!req.command || !req.command.params || !req.command.params.route || !req.command.params.route.auth) {
        return next();
    }

    command = req.command;

    command.context.authenticated = false;

    if (/*check the users cookie here*/ false) {
        command.context.authenticated = true;
    }

    next();
};