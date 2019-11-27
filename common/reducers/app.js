
import { 
	APP_UPDATE_STATE 

} from "common/config/actionTypes"

const initialState = {};

export default (state = initialState, action = {}) => {

	const {
		type,
		data
	
	} = action;

	switch(type) {

		case APP_UPDATE_STATE:

			return {

				...state,
				...data

			};

		default:

			return state;

	}

};