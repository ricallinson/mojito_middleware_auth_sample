# Using Custom Middleware to Authentic Users.

routes.json

    [
        {
            "settings": [ "master" ],

            "index": {
                "path": "/",
                "call": "@tester.index",
                "param": "auth=true"
            }
        }
    ]

application.json

    [
        {
            "settings": [ "master" ],

            "middleware": [
                "mojito-handler-static",
                "mojito-parser-body",
                "mojito-parser-cookies",
                "mojito-contextualizer",
                "mojito-handler-tunnel",
                "mojito-router",
                "./node_modules/mojito_auth_middleware/lib/handler.js",
                "mojito-handler-dispatcher"
            ]
        }
    ]
