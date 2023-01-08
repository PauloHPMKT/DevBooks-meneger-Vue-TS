export default {
	GET_USERS(state: any, payload: any) {
		state.Users = payload;
	},

	LOGIN(state: any, payload: any) {
		state.userName = payload.name;
		state.userEmail = payload.email;
		state.userId = payload.id;
	},
};
