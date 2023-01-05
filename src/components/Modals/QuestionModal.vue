<template>
	<div class="box-modal">
		<p>
			Tem certeza que deseja salvar essa imagem {{ file_name }} como capa do
			livro?
		</p>
		<div class="box-btn">
			<form @submit.prevent="$emit('actionBtn')" enctype="multipart/form-data">
				<div>
					<button type="submit">Sim</button>
				</div>
			</form>
			<div>
				<button @click="$emit('closeModal')">Não</button>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "QuestionModal",
	emits: ["actionBtn", "closeModal"],
	props: {
		file_name: {
			type: String,
			required: true,
		},
	},
});
</script>

<style scoped lang="scss">
.box-modal {
	position: fixed;
	top: 50%;
	left: 50%;
	z-index: 2002;
	transform: translate(-50%, -50%);
	background: red;
	padding: 20px;

	.box-btn {
		display: flex;
	}
}
</style>
