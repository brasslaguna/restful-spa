
import service from "feathers-sequelize"

import hooks from "./hooks"

export default function () {

	const { myModel } = this.get("sequelizeModels");

	this.use(

		"myModels",

		service({

			Model: myModel

		})

	);

	this.service("myModels").hooks(hooks);

}
