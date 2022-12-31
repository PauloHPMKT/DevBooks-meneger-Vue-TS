<template>
	<div class="overview">
		<div>
			<SearchBar @search="searchBook" @open-form="openForm" />
			<!-- Forms components -->
			<FormBook v-if="hiddenFormCreate" @hiddenForm="closeForm" />
			<ul class="table-books">
				<li v-for="book in books" :key="book._id" class="card-book">
					<div class="title-book-infomations">
						<h3>{{ book.title }}</h3>
						<p>{{ book.plot }}</p>
					</div>
					<div class="card-book-infomations">
						<div class="poster-container">
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
						<div class="book-informations">
							<h5>Sinópse</h5>
							<p>{{ book.full_plot }}</p>
							<p>{{ book.author.name }}</p>
						</div>
					</div>
				</li>
			</ul>
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

	.card-book {
		background-color: #d5e2fb;
		padding: 25px 20px;
		border-radius: 8px;

		.title-book-infomations {
			margin-bottom: 20px;
		}

		.card-book-infomations {
			background-color: #fff;
			padding: 25px 10px;
			border-radius: 8px;
			display: flex;

			.poster-container {
				width: 20%;

				img {
					width: 100%;
				}
			}

			.book-informations {
				width: 80%;
				padding: 0 20% 0 30px;

				h5 {
					font-size: 20px;
					margin-bottom: 15px;
				}
			}
		}
	}
}
</style>
