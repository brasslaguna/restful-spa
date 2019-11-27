
export default function(Models) {

	const sequelize = this.get("sequelizeClient");

	const models = {};

	for(let name in Models)

		models[`${name[0].toLowerCase()}${name.slice(1)}`] = Models[name](sequelize);

	for(let name in models)

		if(models[name].associate)
			
			models[name].associate(models);

	this.set("sequelizeModels", models);

}