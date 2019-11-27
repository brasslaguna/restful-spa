
import fs from "fs"
import path from "path"
import feathers from "@feathersjs/feathers"
import express from "@feathersjs/express"
import Sequelize from "sequelize-views-support"

import initModels from "./helper/initModels"
import services from "./services"
import models from "./models"

const dbconnection = fs.readFileSync(path.resolve(__dirname, "../dbconnection"), "utf8")

require("pg").defaults.parseInt8 = true

const app = express(feathers());

app.use(express.json());

app.use(express.urlencoded({ extended: true}));

app.configure(express.rest());

app.use((req, res, next) => {

   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Methods", "DELETE, PUT, GET, POST, PATCH");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
   res.header("Access-Control-Allow-Credentials", "true");

   next();

});

const opts = {

	dialect: "postgres",

	pool: {

		max: process.env.MAX_DB_POOL
	
	}

};

const sequelize = new Sequelize(

	dbconnection,

	opts

);

sequelize.authenticate()

	.then(() => {

		app.set("sequelizeClient", sequelize);

		initModels.call(app, models);

		app.configure(services);

		app.use(express.errorHandler());

		app.listen(process.env.PORT);

	})
		.catch(console.error);

