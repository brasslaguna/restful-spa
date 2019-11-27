
import React from "react"
import { Provider } from "react-redux"
import { ConnectedRouter } from "react-router-redux"
import { renderRoutes } from "react-router-config"

export default class RouterReduxApp extends React.Component {

	render() {

		const { 
			history, 
			store,
			routes,
			isSSR

		} = this.props;

		return (

			<Provider store={store}>

				<ConnectedRouter isSSR={isSSR} history={history}>

					{renderRoutes(routes)}

				</ConnectedRouter>

			</Provider>

		);

	}

}