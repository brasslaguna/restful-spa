
import React from "react"
import Helmet from "react-helmet"

export default class Html extends React.Component {
	
	render() {

		const { 
			content,
			state = {},
			config = {}

		} = this.props;

		const head = Helmet.renderStatic();

		return (

			<html lang="en-US">

				<head>

					{head.title.toComponent()}
					{head.meta.toComponent()}

					<link rel="stylesheet" href="/static/app.css" />
					
					{head.script.toComponent()}

				</head>

				<body>

					<div id="root" dangerouslySetInnerHTML={{ __html: content }} />

					<script dangerouslySetInnerHTML={
						{ 
							__html: `window.__config=${JSON.stringify(config)}; window.__state=${JSON.stringify(state)};` 
						}
					}></script>

					<script src="/static/app.js"></script>

				</body>

			</html>

		);

	}

}