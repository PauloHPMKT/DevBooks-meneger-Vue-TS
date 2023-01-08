import userServices from "@/services/userServices";
import jwtDecode from "jwt-decode";

export default {
	async getAllUsers({ commit }: any, data: object) {
		await userServices.getUsers().then((res) => {
			console.log(res.data);

			commit("GET_USERS", res);
		});
	},

	async login(context: any, data: object) {
		await userServices.login(data).then((res) => {
			const validToken = res.data.token;

			if (validToken) {
				localStorage.setItem("token", validToken);
				const decode = jwtDecode(validToken);
				console.log(decode);
				context.commit("LOGIN", decode);

				location.replace("/app/dashboard");
			}
		});
	},
};
