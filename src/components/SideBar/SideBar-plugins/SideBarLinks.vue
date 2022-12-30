<template>
	<div class="links">
		<nav>
			<ul class="links__navigation">
				<li v-for="link in dataLinks" :key="link.id">
					<router-link
						:to="{ path: `${link.router}` }"
						@click="defineRouterName(link.description)"
						:class="{
							isActiveRouter:
								$store.state.userStore.routerName === link.description
									? isActive
									: isInactive,
						}"
					>
						<Icon :icon="`carbon:${link.icon}`" />
						<p>{{ link.description }}</p>
					</router-link>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";

import routerLinks from "@/contants/router-links";

export default defineComponent({
	name: "SideBarLinks",
	components: { Icon },
	data() {
		return {
			dataLinks: routerLinks,
			isActive: true,
			isInactive: false,
		};
	},

	methods: {
		defineRouterName(data: string) {
			this.$store.state.userStore.routerName = data;
		},
	},

	mounted() {},
});
</script>
