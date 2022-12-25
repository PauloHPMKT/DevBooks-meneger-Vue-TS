<template>
	<div class="overview">
		<div class="overview__search-bar">
			<div>
				<input type="text" placeholder="" />
			</div>
			<div>
				<MainButton :title_btn="'Pesquisar'" />
				<MainButton :title_btn="'Adicionar novo livro'" />
			</div>
		</div>
		<h3>pagina de livros</h3>
		<ul>
			<li v-for="book in books" :key="book._id">
				<div>
					<p>{{ book.title }}</p>
					<p>{{ book.author.name }}</p>
					<img
						v-if="
							book.poster.image_cover ? book.poster.image_cover : empty.poster
						"
						:src="`${imagePath}/${book.poster.image_cover}`"
						:alt="book.title"
					/>
				</div>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import MainButton from "@/components/Buttons/MainButton.vue";
import { defineComponent } from "vue";
const HOST_URI = import.meta.env.VITE_HOST_URI;

export default defineComponent({
	name: "BooksReports",
	components: { MainButton },
	data() {
		return {
			books: this.$store.state.bookStore.Books,
			empty: {
				poster: "/img/empty-cover.png",
			},
			imagePath: HOST_URI,
		};
	},
	methods: {
		async getAllBooks() {
			await this.$store.dispatch("bookStore/getBooks", this.books);
		},
	},
	mounted() {
		this.getAllBooks();
		console.log(this.$store.state.bookStore.Books);
	},
});
</script>

<style lang="scss">
.overview__search-bar {
	background: red;
	display: flex;
	align-items: center;
}
</style>
