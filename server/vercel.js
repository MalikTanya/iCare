{
    "version" : "1.0.0",
    "builds" : [
      {
        "src": "./server.js",
        "use": "@vercel/node"
      }
    ],
    "routes" : [
      { "handle": "filesystem" },
      {
        "src": "/.*",
        "dest": "server.js"
      }
    ]
  }