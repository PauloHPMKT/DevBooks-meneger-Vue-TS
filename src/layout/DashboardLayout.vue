<template>
	<div class="wrapper">
		<SideBar />
		<div class="main-painel">
			<Header />
			<main>
				<Content />
			</main>
			<Footer />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import SideBar from "@/components/SideBar/index.vue";
import Header from "@/components/Header/index.vue";
import Content from "./Content.vue";
import Footer from "@/components/Footer/index.vue";

export default defineComponent({
	name: "DashboardLayout",
	components: { SideBar, Header, Content, Footer },
});
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
