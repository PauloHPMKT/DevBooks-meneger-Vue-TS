export default {
	LOGIN(state: any, payload: any) {
		state.userName = payload.name
    state.userEmail = payload.email
    state.userId =  payload.sub
	}
}
