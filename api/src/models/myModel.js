
import { 
	STRING

} from "sequelize"

import Base from "./base"

export default sequelize => {

	const model = sequelize.define(

		"myModel", 

		{

			...Base(),

			name: {

				type: STRING,

				allowNull: false

			}

		}

	);

	model.associate = ({ myModel, /*theirModel*/ }) => {

		/*

			theirModel.belongsTo(
				myModel, 
				{ 
					as: "columnName",
					targetKey: "id"
				}
			);

		*/

	};

	return model;

}