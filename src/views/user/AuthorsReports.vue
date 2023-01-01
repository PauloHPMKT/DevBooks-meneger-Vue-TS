<template>
	<div>{{ $store.state.authorStore.authors }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "AuthorsReports",
	data() {
		return {
			authors: [],
		};
	},

	methods: {
		async getAllAuthors() {
			await this.$store.dispatch("authorStore/getAuthors", this.authors);
		},
	},

	mounted() {
		this.getAllAuthors();
		console.log(this.$store.state);
	},
});
</script>
