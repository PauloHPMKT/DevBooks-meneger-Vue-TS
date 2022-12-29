<template>
	<div class="overview">
		<div>
			<SearchBar />
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
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchBar from "@/components/SearchBar/index.vue";
const HOST_URI = import.meta.env.VITE_HOST_URI;

export default defineComponent({
	name: "BooksReports",
	components: { SearchBar },
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

<style lang="scss"></style>
