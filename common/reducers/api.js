
import {
	API 

} from "common/config/actionTypes"

import Api from "../api"

export default function(state = {}, action = {}) {

	const {
		type,
		data
	
	} = action;

	switch(type) {

		case API:

			return Api(data);

		default:

			return state;

	}

}