import axios from "axios";

export default axios.create({
	mode: "cors",
	baseURL: "https://nyc-restrooms-locator-backend.herokuapp.com",
});
