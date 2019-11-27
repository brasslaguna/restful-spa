
import {
	STRING,
	literal

} from "sequelize"

export default () => ({

	id: {

		allowNull: false,
		primaryKey: true,
		type: STRING,
		defaultValue: literal("uuid_generate_v4()")
	
	}

});