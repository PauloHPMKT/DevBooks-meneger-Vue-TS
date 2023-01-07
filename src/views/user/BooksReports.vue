<template>
	<div class="overview">
		<!-- Definir um escopo de click out target para fechar o form -->
		<StatusModal
			:status_message="message"
			:class="{ isModalActive: isActive, hasError: isError }"
		/>
		<div ref="formCreateBook">
			<SearchBar @search="searchBook" @open-form="openForm" />
			<!-- Forms components -->
			<FormBook
				v-if="hiddenFormCreate"
				@hiddenForm="closeForm"
				@submitForm="createBook"
				:imageRender="imageRender"
				ref="file"
				name="image"
			/>
			<ul class="table-books">
				<li v-for="book in books" :key="book._id" class="card-book">
					<div class="title-book-infomations">
						<div @click="hiddenCardBook(book._id)">
							<h3>{{ book.title }}</h3>
							<p>{{ book.plot }}</p>
						</div>
						<div class="icon-menu" @click="callOptionsModal(book._id)">
							<Icon icon="carbon:overflow-menu-vertical" />
						</div>
						<OptionsModal
							v-if="hiddenOptionsModal && idBook === book._id"
							@remove="callQuestionModal(book._id)"
						/>
						<QuestionModal
							v-if="hiddenQuestionModal && idBook === book._id"
							:text_field="`Deseja remover o livro ${book.title}?`"
							@closeModal="closeQuestionModal"
							@action="removeBookItem(book._id, book)"
						/>
					</div>
					<div
						class="card-book-infomations"
						v-if="hiddenCardBookInformations && idBook === book._id"
					>
						<div class="poster-container">
							<!--tratar erro de imagem vazia-->
							<img
								v-if="
									book.poster.image_cover === ''
										? empty.poster
										: book.poster.image_cover
								"
								:src="`${imagePath}/${book.poster.image_cover}` || empty.poster"
								:alt="book.title"
							/>
						</div>
						<div class="book-informations">
							<h5>Sinópse</h5>
							<p>{{ book.full_plot }}</p>
							<div class="book-technical-informations">
								<div class="technics-dispatches">
									<h5>Informações Tecnicas</h5>
									<p>Autor: {{ book.author.name }}</p>
									<p>Genero: {{ book.genres }}</p>
									<p>Idioma: {{ book.language }}</p>
									<p>Ano de lancamento: {{ book.year }}</p>
									<p>Número de páginas: {{ book.pages_number }}</p>
								</div>
								<!--<div class="technics-dispatches">
									<h5>Informações dos críticos</h5>
									<p>Nota por avaliacao: {{ book.technical.rating }}</p>
									<p>Leitores: {{ book.technical.readers }}</p>
									<p>Votantes: {{ book.technical.votes }}</p>
								</div>-->
								<div class="technics-dispatches">
									<p>
										O registro desse exemplar foi criado em:
										{{ new Date(book.createdAt).toLocaleString().slice(0, 10) }}
									</p>
								</div>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";
import type { IBookFields } from "@/interfaces/Ibooks";
import SearchBar from "@/components/SearchBar/index.vue";
import StatusModal from "@/components/Modals/StatusModal.vue";
import FormBook from "@/components/Forms/Books/FormBook.vue";
import OptionsModal from "@/components/Modals/OptionsModal.vue";
import QuestionModal from "@/components/Modals/QuestionModal.vue";
import bookService from "@/services/bookService";
import uploadService from "@/services/uploadService";
const HOST_URI = import.meta.env.VITE_HOST_URI;

export default defineComponent({
	name: "BooksReports",
	components: {
		SearchBar,
		FormBook,
		OptionsModal,
		Icon,
		QuestionModal,
		StatusModal,
	},
	data() {
		return {
			books: this.$store.state.bookStore.Books,
			empty: {
				poster: "img/empty-cover.png",
			},
			imagePath: HOST_URI,
			hiddenFormCreate: false,
			hiddenCardBookInformations: false,
			hiddenOptionsModal: false,
			hiddenQuestionModal: false,
			isActive: false,
			isError: false,
			idBook: "",
			message: "",
			imageRender: "",
			idImageRender: "",
		};
	},
	methods: {
		//criar livro
		//possibilidades de trazer a imagem... criando estado vuex || trazendo por props
		async createBook(book: IBookFields) {
			const { ...data } = book;
			const bookData = {
				...data,
				cod: Number(data.cod),
				pages_number: Number(data.pages_number),
				year: Number(data.year),
			};

			console.log(bookData);
		},

		//metodos de requisicao
		async getAllBooks() {
			await this.$store.dispatch("bookStore/getBooks", this.books);
		},

		//remove book
		async removeBookItem(id: string, book: object) {
			await bookService.removeBook(id).then((res) => {
				if (res.status === 204) {
					this.isActive = true;
					setTimeout(() => {
						this.isActive = false;
						this.message = "Livro excluído com sucesso!";
					}, 2000);
				} else {
					this.isError = true;
					setTimeout(() => {
						this.isError = false;
						this.message = "Houve algum erro!";
					}, 2000);
				}
				let index = this.books.indexOf(book);
				this.books.splice(index, 1);

				this.hiddenQuestionModal = false;
			});
		},

		callOptionsModal(id: string) {
			this.idBook = id;

			this.hiddenOptionsModal = !this.hiddenOptionsModal;
			console.log(this.idBook);
		},

		callQuestionModal(id: string) {
			this.idBook = id;

			console.log(this.idBook);

			this.hiddenQuestionModal = true;
			this.hiddenOptionsModal = false;
		},

		closeQuestionModal() {
			this.hiddenQuestionModal = false;
		},

		searchBook(data: string) {
			console.log(data);
		},

		hiddenCardBook(id: string) {
			this.idBook = id;

			if (this.idBook === id && !this.hiddenCardBookInformations) {
				this.hiddenCardBookInformations = !this.hiddenCardBookInformations;
			}
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

		const self: any = this.$refs.formCreateBook;
		document.addEventListener("click", (e: Event) => {
			if (self !== undefined && self.contains(e.target) === false) {
				this.hiddenFormCreate = false;
			}
		});
	},
});
</script>

<style lang="scss">
.table-books {
	background-color: #fff;
	margin: 15px 0;
	padding: 20px;
	border-radius: 8px;
	overflow-y: scroll;
	height: 645px;

	.card-book {
		background-color: #d5e2fb;
		padding: 25px 20px 20px 20px;
		margin-bottom: 5px;
		border-radius: 8px;

		.title-book-infomations {
			cursor: pointer;
			display: flex;
			justify-content: space-between;
			align-items: center;

			h3 {
				margin-bottom: 5px;
			}

			p {
				font-size: 14px;
			}

			.icon-menu {
				background: rgb(206, 206, 206);
				padding: 10px 8px;
				border-radius: 8px;
				font-size: 30px;
				transition: 0.3s ease-in-out;

				&:hover {
					background: rgb(152, 152, 152);
				}
			}
		}

		.card-book-infomations {
			background-color: #fff;
			padding: 10px;
			margin-top: 25px;
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

				.book-technical-informations {
					display: flex;
					margin-top: 30px;

					.technics-dispatches {
						width: 33.3%;

						> p {
							margin-bottom: 5px;
						}
					}
				}
			}
		}
	}
}
</style>
