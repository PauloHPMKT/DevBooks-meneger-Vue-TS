<template>
	<div class="overview">
		<SearchBar
			:search_name="'Encontre um usuário'"
			:event_name="'Cadastrar novo usuário'"
		/>
		<ul class="table"></ul>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchBar from "@/components/SearchBar/index.vue";

export default defineComponent({
	name: "UserReports",
	components: {
		SearchBar,
	},
});
</script>
