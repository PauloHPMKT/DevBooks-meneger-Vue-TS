<template>
	<div class="search-bar">
		<div>
			<BaseInput
				class="input-styles"
				v-model="search_data"
				placeholder="Faca aqui sua busca!"
			/>
		</div>
		<div class="btn-container">
			<form @submit.prevent="$emit('search', search_data)">
				<MainButton type="submit" :title_btn="'Pesquisar livro'" />
			</form>
			<MainButton
				@click="$emit('openForm')"
				:title_btn="'Adicionar novo livro'"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseInput from "../Inputs/BaseInput.vue";
import MainButton from "@/components/Buttons/MainButton.vue";

export default defineComponent({
	name: "SearchBar",
	components: { BaseInput, MainButton },
	emits: ["search", "openForm"],
	data() {
		return {
			search_data: "",
		};
	},
});
</script>

<style scoped lang="scss">
.search-bar {
	background: #fff;
	padding: 20px;
	display: flex;
	align-items: center;
	border-radius: 8px;

	.input-styles {
		border: 1px solid #d3d2d2;
		margin-right: 10px;
	}

	.btn-container {
		display: flex;

		button {
			margin-right: 10px;
			background-image: linear-gradient(#343a63, #1f233b);
			color: #fff;

			&:hover {
				background: #343a63;
			}

			&:active:focus {
				background: #1f233b;
			}
		}
	}
}
</style>
