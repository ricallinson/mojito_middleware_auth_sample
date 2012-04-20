
module.exports = function(req, res, next) {

    var command = {};

    /*
     * Check if the route said we should do authentication.
     */
    if (!req.command || !req.command.params || !req.command.params.route || !req.command.params.route.auth) {
        next();
        return;
    }

    /*
     * Grab the command object so we can work with it.
     */
    command = req.command;

    /*
     * Set our default state to "false", not authenticated.
     */
    command.context.authenticated = false;

    /*
     * Check the users cookie for something that validates them as authenticated.
     */
    if (false) {
        command.context.authenticated = true;
    }

    next();
};