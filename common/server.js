
import express from "express"
import React from "react"
import ReactDom from "react-dom/server"
import { matchRoutes } from "react-router-config"
import { trigger } from "redial"
import createHistory from "history/createMemoryHistory"
import compression from "compression"
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import Html from "common/components/html"
import RouterReduxApp from "common/components/routerReduxApp"
import Api from "./api"

export default ({ routes, reducers, staticDirectoryPath }) => {

	const app = express();

	app.disable("x-powered-by");

	app.use(compression());

	app.use("/static", express.static(staticDirectoryPath));

	app.use(

		async (req, res) => {

			const history = createHistory({ 

				initialEntries: [

					{ 
						pathname: req.path,
						search: req._parsedUrl.search,
						state: { status: 200 }
					}

				] 

			});

			const apiUrl = `http://${req.hostname}:${process.env.API_PORT}`;

			const api = Api(apiUrl);

			const config = {

				host: req.hostname,
				protocol: req.protocol,
				apiUrl

			};

			let initialState = { config, api };

			const store = 

				createStore(

					reducers,

					{ ...initialState },

					applyMiddleware(thunk)

				);

			const matchedRoutes = matchRoutes(routes, req.path);

			const components = matchedRoutes.map(v => v.route.component);

			// ssr matchRoutes invariably returns the root "/" as first match

			const {params, url} = matchedRoutes[matchedRoutes.length - 1].match;

			await trigger(

				"fetch",

				components,

				{
					getState: store.getState.bind(store),
					dispatch: store.dispatch.bind(store),
					history,
					params,
					url
				}

			);

			const content = ReactDom.renderToString(

				<RouterReduxApp history={history} store={store} routes={routes} isSSR={true} />

			);

			const {
				state = { status: 200 }
			
			} = history.location;

			const storeState = store.getState();

			const html = `<!doctype html>${ReactDom.renderToString(<Html content={content} state={storeState} config={config} />)}`;

			res

				.status(state.status)

				.send(html);

		}

	);

	app.use((error, req, res) => {

		if(error)

			console.error(error);

	});

	app.listen(process.env.PORT);

}
