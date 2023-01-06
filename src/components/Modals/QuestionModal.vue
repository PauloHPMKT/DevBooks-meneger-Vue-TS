<template>
	<div class="box-modal">
		<p>Tem certeza que deseja salvar essa imagem como capa do livro?</p>
		<div class="box-btn">
			<div>
				<button>Sim</button>
			</div>
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
	/*props: {
		file_name: {
			type: String,
			required: true,
		},
	},*/
});
</script>

<style scoped lang="scss">
.box-modal {
	position: fixed;
	top: 50%;
	left: 50%;
	z-index: 2002;
	transform: translate(-50%, -50%);
	filter: drop-shadow(-2px 2px 5px rgba(0, 0, 0, 0.082));
	padding: 20px;
	background-color: #fff;
	border-radius: 8px;
	height: 150px;
	padding: 20px;

	.box-btn {
		display: flex;
	}
}
</style>
