<template>
	<div class="form-container">
		<Icon icon="carbon:close" @click="$emit('hiddenForm')" />
		<h2>Formulario para criar novo livro</h2>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";

export default defineComponent({
	name: "FormBook",
	components: { Icon },
});
</script>

<style scoped lang="scss">
.form-container {
	position: fixed;
	z-index: 2001;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: #fff;
	filter: drop-shadow(-2px 2px 10px rgba(0, 0, 0, 0.322));
	padding: 20px;
}
</style>
