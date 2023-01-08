import { ApiService } from "./api";

export default {
	getUsers: () => {
		return ApiService.get("/users");
	},

	login: (data: object) => {
		return ApiService.post("/usuariosauth", data);
	},
};
