<template>
	<form @submit.prevent="teste">
		<label for="email">E-mail</label>
		<div class="input-style">
			<input id="email" type="text" placeholder="meuemail@devbooks.com" />
		</div>
		<label for="password">Senha</label>
		<div class="input-style">
			<input id="email" type="password" placeholder="**********" />
		</div>
		<MainButton class="btn-style-success" :title_btn="'Login'"/>
	</form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainButton from "../Buttons/MainButton.vue";

export default defineComponent({
	name: "FormLogin",
	methods: {
		teste() {
			alert("ok");
		},
	},
	components: { MainButton },
});
</script>
