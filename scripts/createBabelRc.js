
const fs = require("fs");
const path = require("path");

const template = fs.readFileSync(path.resolve(__dirname, "../.babelrc.template"), "utf8");

fs.writeFile(

	".babelrc", 

	template.replace(/ROOT/g, path.resolve(__dirname, "..").replace(/\\/g, '/')),

	error => {

		if(error)

			console.error(error);

	}

);
