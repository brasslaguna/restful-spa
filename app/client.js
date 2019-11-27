
import client from "common/client"
import routes from "./routes"
import reducers from "./config/combinedReducers"

client({

	reducers,
	routes

});