
import React from "react"
import { connect } from "react-redux"
import { matchPath, Switch } from "react-router"
import { bindActionCreators } from "redux"
import { renderRoutes } from "react-router-config"
import Helmet from "react-helmet"
import { provideHooks } from "redial"

import "common/scss/global.scss"
import styles from "./styles.scss"

@provideHooks({

	fetch: ({ getState, dispatch, params }) => {}

})

@connect(

	state => ({ }),

	dispatch => bindActionCreators({ }, dispatch)

)

export default class App extends React.Component {

	constructor() {

		super();

	}

	render() {

		const {

			route

		} = this.props;

		return (

			<div className={styles.root}>

				<Helmet>

					<title>

						My App

					</title>

				</Helmet>

				<main>

					{renderRoutes(route.routes)}

				</main>

			</div>

		);

	}

}