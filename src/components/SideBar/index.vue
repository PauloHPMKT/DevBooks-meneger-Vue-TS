<template>
	<div class="sidebar">
		<div class="sidebar__container">
			<div class="sidebar--logo-container">
				<router-link :to="{ path: `/app/dashboard` }">
					<img
						src="/img/logo-livraria-do-dev-removebg.png"
						alt="logo DevBook"
					/>
				</router-link>
			</div>
			<SideBarLinks />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SideBarLinks from "./SideBar-plugins/SideBarLinks.vue";

export default defineComponent({
	name: "SideBar",
	components: { SideBarLinks },
});
</script>
