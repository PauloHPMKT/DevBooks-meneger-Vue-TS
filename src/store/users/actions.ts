import userServices from '@/services/userServices'
import jwtDecode from 'jwt-decode'

export default {
	async login(context: any, data: object) {
    await userServices.login(data).then(res => {
			const validToken = res.data.token

      if (validToken) {
        localStorage.setItem('token', validToken)
        const decode = jwtDecode(validToken)
				console.log(decode)
        context.commit('LOGIN', decode)

        location.replace('/app/dashboard')
      }
    })
  }
}
