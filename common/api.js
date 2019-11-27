
import feathers from "@feathersjs/feathers"
import rest from "@feathersjs/rest-client"
import axios from "axios"

export default host => {

	const api = feathers();

	const transport = rest(host);

	api.configure(

		transport.axios(axios.create())

	);

	return api;

}