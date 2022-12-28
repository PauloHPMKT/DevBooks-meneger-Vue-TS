<template>
	<div class="overview__search-bar">
		<div>
			<BaseInput placeholder="Faca aqui sua busca!" />
		</div>
		<div>
			<MainButton :title_btn="'Pesquisar'" />
			<MainButton :title_btn="'Adicionar novo livro'" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "SearchBar",
});
</script>
