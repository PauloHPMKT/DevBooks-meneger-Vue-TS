import userServices from '@/services/userServices'
import jwtDecode from 'jwt-decode'

export default {
	async login(context: any, data: object) {
    await userServices.login(data).then(res => {
      console.log(res.data);
      const validToken = res.data.access_token

      if (validToken) {
        localStorage.setItem('token', validToken)

        const decode = jwtDecode(validToken)

        context.commit('LOGIN', decode)

        location.replace('/app/dashboard')
      }
    })
  }
}
