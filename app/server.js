
require("babel-register");

const server = require("../common/server.js");
const reducers = require("./config/combinedReducers.js");
const routes = require("./routes.js");

server({

	reducers: reducers,
	routes: routes,
	staticDirectoryPath: `${__dirname}/static`

});