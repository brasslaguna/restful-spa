
/* import myService from "./myService" */

export default async function() {

	const sequelize = this.get("sequelizeClient");

	/*
		
		this
			.configure(myService)

	*/

	try {

		await sequelize.sync({

			force: false

		});

		/*
			
			run any post db connection scripts here

		*/

	} catch(e) {

		console.log(e);

	}

}