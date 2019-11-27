
const { Client } = require("pg");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const [
	host,
	port,
	user

] = process.argv.slice(2);

const username = crypto.randomBytes(5).toString("hex"),
	  dbname = crypto.randomBytes(10).toString("hex"),
	  password = crypto.randomBytes(20).toString("hex");

let client = new Client({

	user,
	host,
	port,
	database: "postgres"

});

client.connect();

client.query(

	`CREATE USER \"${username}\" WITH PASSWORD \'${password}\'`,

	(err, res) => {

		if(err)

			return console.log(err);

		client.query(

			`CREATE database \"${dbname}\" OWNER \"${username}\" ENCODING='UTF8' TEMPLATE='template0'`,
			
			async (err, res) => {

				if(err)

					return console.log(err);

				const sql = fs.readFileSync(path.resolve(__dirname, "../api/extensions.sql"), "utf8");

				client.query(sql, async (err, res) => {

					if(err)

						return console.log(err);

					client.end();

					client = new Client({

						user: username,
						database: dbname,
						port,
						password,
						host

					});

					try {
					
						await client.connect();

						fs.writeFileSync(path.resolve(__dirname, "../api/dbconnection"), `postgres://${username}:${password}@${host}:${port}/${dbname}`, "ascii");

						client.end();

					} catch(e) {

						console.log(e);

						client.end();

					}

				});

			}

		);

	}

);

