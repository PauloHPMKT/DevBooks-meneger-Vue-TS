<template>
	<div class="overview">
		<div>
			<SearchBar @search="searchBook" @open-form="openForm" />
			<!-- Forms components -->
			<FormBook v-if="hiddenFormCreate" @hiddenForm="closeForm" />
			<div class="table-books">
				<ul>
					<li v-for="book in books" :key="book._id">
						<div>
							<p>{{ book.title }}</p>
							<p>{{ book.author.name }}</p>
							<img
								v-if="
									book.poster.image_cover
										? book.poster.image_cover
										: empty.poster
								"
								:src="`${imagePath}/${book.poster.image_cover}`"
								:alt="book.title"
							/>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchBar from "@/components/SearchBar/index.vue";
import FormBook from "@/components/Forms/Books/FormBook.vue";
const HOST_URI = import.meta.env.VITE_HOST_URI;

export default defineComponent({
	name: "BooksReports",
	components: { SearchBar, FormBook },
	data() {
		return {
			books: this.$store.state.bookStore.Books,
			empty: {
				poster: "/img/empty-cover.png",
			},
			imagePath: HOST_URI,
			hiddenFormCreate: false,
		};
	},
	methods: {
		async getAllBooks() {
			await this.$store.dispatch("bookStore/getBooks", this.books);
		},

		searchBook(data: string) {
			console.log(data);
		},

		openForm() {
			this.hiddenFormCreate = true;
		},

		closeForm() {
			this.hiddenFormCreate = false;
		},
	},
	mounted() {
		this.getAllBooks();
		console.log(this.$store.state.bookStore.Books);
	},
});
</script>

<style lang="scss">
.table-books {
	background-color: #fff;
	margin: 15px 0;
	padding: 20px;
	border-radius: 8px;
}
</style>
