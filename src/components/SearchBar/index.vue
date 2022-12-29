<template>
	<div class="search-bar">
		<div>
			<BaseInput class="input-styles" placeholder="Faca aqui sua busca!" />
		</div>
		<div>
			<MainButton :title_btn="'Pesquisar'" />
			<MainButton :title_btn="'Adicionar novo livro'" />
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
		border: 1px solid #cdcdcd;
		margin-right: 20px;
	}

	button {
		margin-right: 10px;
		background-image: linear-gradient(#343a63, #1f233b);
		color: #fff;

		&:active:focus {
			background: #1f233b;
		}
	}
}
</style>
