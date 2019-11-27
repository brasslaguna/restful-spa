
import App from "app/containers/app/index.js"
import NotFound from "common/containers/notFound/index.js"

export default [

	{

		component: App,

		routes: [

			/* { path: "/", exact: true, component: Home }, */

			{ component: NotFound }

		]

	}

];