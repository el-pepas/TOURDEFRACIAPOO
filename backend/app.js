require("dotenv").config()

const Servers = require("./server/server.js")

const servers = new Servers()

servers.listen()