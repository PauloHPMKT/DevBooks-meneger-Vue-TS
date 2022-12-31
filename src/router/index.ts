import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "login",
			redirect: "/login",
		},
		{
			path: "/login",
			name: "Login",
			component: () => import("../views/Login.vue"),
		},
		{
			path: "/app",
			name: "Template",
			redirect: "app/dashboard",
			component: () => import("../layout/DashboardLayout.vue"),
			children: [
				{
					path: "dashboard",
					name: "Dashboard",
					component: () => import("../views/user/Overview.vue"),
				},
				{
					path: "users",
					name: "Users",
					component: () => import("../views/user/UserReports.vue"),
				},
				{
					path: "books",
					name: "Books",
					component: () => import("../views/user/BooksReports.vue"),
				},
				{
					path: "comments",
					name: "Comments",
					component: () => import("../views/user/CommentsReports.vue"),
				},
				{
					path: "authors",
					name: "Authors",
					component: () => import("../views/user/AuthorsReports.vue"),
				},
				{
					path: "sessions",
					name: "Sessions",
					component: () => import("../views/user/LogsReports.vue"),
				},
			],
		},
	],
});

export default router;
