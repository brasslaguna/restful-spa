
import { NotFound } from "@feathersjs/errors"

export default {

	before: {

		create: NotFound,
		find: NotFound,
		get: NotFound,
		patch: NotFound,
		update: NotFound,
		remove: NotFound

	},

	after: {

	}

};