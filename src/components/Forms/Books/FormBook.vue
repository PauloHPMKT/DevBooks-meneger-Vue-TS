<template>
	<div class="form-container">
		<Icon icon="carbon:close" @click="$emit('hiddenForm')" />
		<div class="title-form">
			<h3>Cadastre aqui um novo livro</h3>
			<p>
				Preencha os campos inserindo os dados conforme solicitados nas labels
			</p>
		</div>
		<div class="forms">
			<form @submit.prevent="submitNewBook">
				<div class="form-setup">
					<div class="inputs-fields">
						<div>
							<p>Informacoes gerais</p>
							<div class="m-bottom">
								<BaseInput
									class="input-styles"
									v-model="book.title"
									placeholder="Título do livro"
								/>
							</div>
							<div class="m-bottom">
								<BaseInput
									class="input-styles"
									v-model="book.plot"
									placeholder="Resumo da sinopse"
								/>
							</div>
							<div class="m-bottom">
								<div class="textarea-style">
									<textarea
										cols="30"
										rows="10"
										v-model="book.full_plot"
										placeholder="Sinopse completa"
									></textarea>
								</div>
							</div>
							<div class="m-bottom">
								<div class="alternative-select-style">
									<select name="author" v-model="book.author">
										<option value="-- Selecione um autor --" disabled selected>
											-- Selecione um author --
										</option>
										<option
											v-for="author in authors"
											:key="author._id"
											:value="author._id"
										>
											{{ author.name }}
										</option>
									</select>
								</div>
							</div>
						</div>
						<div>
							<p>Informacoes tecnicas</p>
							<div class="flex-fields">
								<div class="m-bottom wd-input">
									<BaseInput
										class="input-styles"
										v-model="book.cod"
										placeholder="Código do livro"
									/>
								</div>
								<div class="m-bottom wd-input">
									<BaseInput
										class="input-styles"
										v-model="book.year"
										placeholder="Ano do livro"
									/>
								</div>
								<div class="m-bottom wd-input">
									<BaseInput
										class="input-styles"
										v-model="book.pages_number"
										placeholder="Total de páginas"
									/>
								</div>
							</div>
							<div class="m-bottom">
								<BaseInput
									class="input-styles"
									v-model="book.language"
									placeholder="Idioma original do livro"
								/>
							</div>
							<div class="m-bottom">
								<BaseInput
									class="input-styles"
									v-model="book.genres"
									placeholder="Genero do livro"
								/>
							</div>
						</div>
					</div>
				</div>
				<div class="m-top">
					<MainButton class="alternative-button" :title_btn="'Cadastrar'" />
				</div>
			</form>
			<div>
				<form name="image" enctype="multipart/form-data">
					<!--implementar modal hover para remover a imagem do banco-->
					<div v-if="imageRender" class="viewarea-cover">
						<img :src="`${imagePath}/${imageRender}`" alt="current cover" />
					</div>
					<div
						v-else
						@dragenter.prevent="toggleActive"
						@dragleave.prevent="toggleActive"
						@dragover.prevent
						@drop.prevent="dropFile"
						:class="{ 'active-dropzone': active }"
						class="dropzone"
					>
						<span>Arraste ou Solte o arquivo</span>
						<span>Ou</span>
						<label
							for="dropzoneFile"
							v-if="
								active === true ? (label_text = `${fileList.name}`) : label_text
							"
							>{{ label_text }}</label
						>
						<input
							type="file"
							id="dropzoneFile"
							@change="onFileChange"
							ref="file"
							name="image"
						/>
					</div>
				</form>
			</div>
		</div>
		<!--<QuestionModal
			:file_name="label_text"
			@actionBtn="uploadImage"
			@closeModal="closeQuestionModal"
			v-if="hiddenQuestionModal"
		/>-->
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";
import type { IBookFields } from "@/interfaces/Ibooks";
import BaseInput from "@/components/Inputs/BaseInput.vue";
import MainButton from "@/components/Buttons/MainButton.vue";
import QuestionModal from "@/components/Modals/QuestionModal.vue";
import uploadService from "@/services/uploadService";
const HOST_URI = import.meta.env.VITE_HOST_URI;

export default defineComponent({
	name: "FormBook",
	components: { Icon, BaseInput, MainButton, QuestionModal },
	emits: ["hiddenForm"],
	data() {
		return {
			book: {} as IBookFields,
			authors: this.$store.state.authorStore.authors,
			fileList: [] as any,
			label_text: "Selecione seu arquivo",
			active: false,
			hiddenQuestionModal: false,
			imagePath: HOST_URI,
			imageRender: "",
			idImageRender: "",
		};
	},

	methods: {
		toggleActive() {
			this.active = !this.active;
		},

		/*closeQuestionModal() {
			this.hiddenQuestionModal = false;
			this.active = false;
			this.label_text = "Selecione seu arquivo";
		},*/

		async dropFile(e: DragEvent) {
			this.hiddenQuestionModal = true;
		},

		// funcao para o input type file
		async onFileChange() {
			this.active = !this.active;
			this.fileList = this.$refs.file.files;

			const formData = new FormData();

			formData.append("image", this.fileList[0]);

			uploadService
				.uploadImage(formData, {
					headers: {
						"Content-Type": "multipart/form-data",
					},
				})
				.then((res) => {
					this.imageRender = res.data.image_cover;
					this.idImageRender = res.data._id;
					console.log(this.idImageRender);
				});
		},

		//repassar valor do  input file para this.book e submeter | capturar por id
		submitNewBook() {
			const { ...book } = this.book;
			const createBook = {
				...book,
				cod: Number(book.cod),
				pages_number: Number(book.pages_number),
				year: Number(book.year),
				poster: this.idImageRender,
			};

			console.log(createBook);
		},
	},
});
</script>

<style scoped lang="scss">
@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;600;800;900&display=swap);
@import "../../../assets/sass/mixins/default-styles/mixins";
.form-container {
	position: fixed;
	z-index: 2001;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 8px;
	background-color: #fff;
	filter: drop-shadow(-2px 2px 10px rgba(0, 0, 0, 0.322));
	padding: 30px;

	svg {
		position: absolute;
		z-index: 2002;
		top: 20px;
		right: 20px;
		font-size: 27px;
	}

	.title-form {
		margin-bottom: 20px;

		h3 {
			margin-bottom: 5px;
		}
	}

	.forms {
		display: flex;
		width: 100%;

		.form-setup {
			width: 100%;
			display: flex;

			.inputs-fields {
				padding-right: 5%;
				width: 90%;

				p {
					margin: 20px 0 10px 0;
				}

				.flex-fields {
					display: flex;
					justify-content: space-between;
				}

				.wd-input {
					width: 32.5%;
				}

				.m-bottom {
					margin-bottom: 7px;

					.input-styles {
						border: 1px solid #c6c1c1;
						width: 100%;
					}
					.textarea-style {
						@include alternative-style(100px);

						textarea {
							padding-top: 12px;
							font-size: 1rem;
							border: none;
							font-family: "Roboto", Arial, Helvetica, sans-serif;
							width: 100%;
						}
					}

					.alternative-select-style {
						@include alternative-style(40px);

						select {
							font-size: 16px;
							width: 100%;
							height: 100%;
							border: none;
						}
					}
				}
			}
		}

		.viewarea-cover {
			height: 250px;
			width: 200px;

			img {
				width: 100%;
			}
		}

		.dropzone {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			height: 250px;
			width: 200px;
			row-gap: 16px;
			border: 2px dashed #009acc;
			border-radius: 8px;
			padding: 10px;
			transition: 0.3s ease-in-out all;
			font-size: 12px;
			cursor: pointer;

			label {
				padding: 8px 20px;
				color: #fff;
				background-color: #009acc;
				transition: 0.3s ease-in-out all;
				cursor: pointer;
			}

			input[type="file"] {
				display: none;
			}
		}

		.active-dropzone {
			color: #fff;
			border-color: #fff;
			background-color: #002c3a;

			label {
				background-color: #fff;
				color: #002c3a;
			}
		}
	}

	.m-top {
		margin-top: 15px;
	}
}
</style>
