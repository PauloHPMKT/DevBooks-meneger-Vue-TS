<template>
	<div>
		<h3>pagina de livros</h3>
		<ul>
			<li>teste</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import bookServices from "../../services/bookService";

export default defineComponent({
	name: "BooksReports",
	data() {
		return {
			books: [],
		};
	},

	methods: {
		async getAllBooks(): Promise<void> {
			await bookServices.getBooks().then((res) => {
				console.log(res);
			});
		},
	},
	mounted() {
		this.getAllBooks();
	},
});
</script>
