import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
			redirect: '/login',
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue'),
    },
		{
			path: '/app',
			name: 'Template',
			redirect: 'app/dashboard',
			component: () => import('../layout/DashboardLayout.vue'),
			children: [
				{
					path:	'dashboard',
					name: 'Dashboard',
					component: () => import('../views/user/Overview.vue'),
				}
			]
		},
  ]
})

export default router
