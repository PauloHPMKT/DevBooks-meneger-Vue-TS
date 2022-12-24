<template>
	<div>
		<h3>pagina de livros</h3>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "BooksReports",
	data() {
		return {
			books: [],
		};
	},

	mounted() {
		console.log(this.$store.state);
	},
});
</script>
