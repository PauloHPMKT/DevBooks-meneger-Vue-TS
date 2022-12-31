<template>
	<div class="form-container">
		<Icon icon="carbon:close" @click="$emit('hiddenForm')" />
		<div class="title-form">
			<h3>Cadastre aqui um novo livro</h3>
			<p>
				Preencha os campos inserindo os dados conforme solicitados nas labels
			</p>
		</div>
		<form @submit.prevent="submitNewBook">
			<div class="form-setup">
				<div class="inputs-fields">
					<div>
						<p>Informacoes gerais</p>
						<div>
							<BaseInput
								class="input-styles"
								v-model="book.title"
								placeholder="Título do livro"
							/>
						</div>
						<div>
							<BaseInput class="input-styles" placeholder="Título do livro" />
						</div>
					</div>
					<div>
						<p>Informacoes tecnicas</p>
					</div>
				</div>
				<div class="dropzone">Dropzone</div>
			</div>
			<MainButton :title_btn="'Cadastrar'" />
		</form>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";
import type { IBookFields } from "@/interfaces/Ibooks";
import BaseInput from "@/components/Inputs/BaseInput.vue";
import MainButton from "@/components/Buttons/MainButton.vue";

export default defineComponent({
	name: "FormBook",
	components: { Icon, BaseInput, MainButton },
	emits: ["hiddenForm"],
	data() {
		return {
			book: {} as IBookFields,
		};
	},

	methods: {
		submitNewBook() {
			console.log(this.book);
		},
	},
});
</script>

<style scoped lang="scss">
.form-container {
	position: fixed;
	z-index: 2001;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 8px;
	background-color: #fff;
	filter: drop-shadow(-2px 2px 10px rgba(0, 0, 0, 0.322));
	padding: 20px;

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

	.form-setup {
		display: flex;
		width: 750px;

		.inputs-fields {
			width: 70%;

			.input-styles {
				border: 1px solid #c6c1c1;
			}
		}
	}
}
</style>
