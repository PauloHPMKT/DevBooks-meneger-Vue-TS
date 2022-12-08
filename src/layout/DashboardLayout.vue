<template>
	<div class="wrapper">
		<SideBar />
		<div class="main-painel">
			<div>header</div>
			<div>
				<Content />
			</div>
			<div>footer</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Content from "./Content.vue";
import SideBar from "../components/SideBar/index.vue";

export default defineComponent({
	name: "DashboardLayout",
	components: { SideBar, Content },
});
</script>
