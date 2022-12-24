<template>
	<div>
		<h3>pagina de livros</h3>
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
				this.books = res.data.books;
				console.log(this.books);
			});
		},
	},
	mounted() {
		this.getAllBooks();
	},
});
</script>
