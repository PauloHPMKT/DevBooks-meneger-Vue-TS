import { ApiService } from './api'

export default {
	login: (data: object) => {
		return ApiService.post('/usuariosauth', data)
	}
}
