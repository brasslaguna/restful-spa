
export default ({

	add,
	update,
	remove,

	state,
	data,

	type,
	property

}) => {

	switch(type) {

		case add: {

			const newState = { ...state };

			newState[property] = [

				...state[property].filter(

					o => !data.find(({ id }) => id == o.id)

				),

				...data

			];

			return newState;

		}

		case update: {

			const newState = { ...state };

			newState[property] = [

				...data.filter(

					o => !state[property].find(({ id }) => id == o.id )

				),

				...state[property].map( 

					o => {

						const found = data.find(({ id }) => id == o.id);

						if(found)

							o = { ...o, ...found };

						return o;

					}

				)

			];

			return newState;

		}

		case remove: {

			const newState = { ...state };

			newState[property] = newState[property].filter(o => o.id !== data);

			return newState;

		}

		default:

			return state;

	}

};