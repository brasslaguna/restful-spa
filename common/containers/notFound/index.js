
import React from "react"
import { connect } from "react-redux"
import Helmet from "react-helmet"

import styles from "./styles.scss"

@connect(

	state => ({ })

)

export default class NotFound extends React.Component {

	render() {

		return (

			<div>

				<Helmet>

					<title>

						404

					</title>

				</Helmet>

				<h1>
					
					404 Not Found
				
				</h1>

			</div>

		);

	}

}