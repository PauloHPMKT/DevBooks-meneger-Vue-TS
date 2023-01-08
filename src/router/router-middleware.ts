import type { NavigationGuardNext, RouteLocation } from "vue-router";

export const authGuard =
	() => (to: RouteLocation, from: RouteLocation, next: NavigationGuardNext) => {
		if (localStorage.getItem("token") || "") {
			next();
		} else {
			next("/");
		}
	};
