
import React from "react"
import ReactDom from "react-dom"
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import createHistory from "history/createBrowserHistory"
import RouterReduxApp from "common/components/routerReduxApp"

import Api from "./api"

export default ({ reducers, routes }) => {

	const history = createHistory({ initialEntries: [ window.location.href ] });

	const store = 

		createStore(

			reducers,

			{ 
				...__state, 
				api: Api(__config.apiUrl) 
			},

			applyMiddleware(thunk)

		);

	ReactDom.hydrate(

		<RouterReduxApp history={history} store={store} routes={routes} />,

		document.getElementById("root")

	);

}
