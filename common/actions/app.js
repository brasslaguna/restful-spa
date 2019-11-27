
import {
	APP_UPDATE_STATE

} from "../config/actionTypes"

export function update(data) {

	return dispatch => {

		dispatch({

			type: APP_UPDATE_STATE,
			
			data

		});

	};

}