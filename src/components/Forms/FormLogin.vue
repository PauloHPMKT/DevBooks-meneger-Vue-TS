<template>
	<form @submit.prevent="$emit('handleSubmit', user)">
		<label for="email">E-mail</label>
		<div class="input-style">
			<input
				id="email"
				type="text"
				v-model="user.email"
				placeholder="meuemail@devbooks.com"
			/>
		</div>
		<label for="password">Senha</label>
		<div class="input-style">
			<input
				id="password"
				:type="inputType"
				v-model="user.password"
				placeholder="**********"
			/>
			<PasswordRevelling
				@toggle="togglePassword"
				:isPassword="isPasswordVisible"
			/>
		</div>
		<MainButton
			type="submit"
			:title_btn="'Login'"
			class="btn-style-success"
		/>
	</form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainButton from "../Buttons/MainButton.vue";
import PasswordRevelling from "../Icons/PasswordRevelling.vue";

export default defineComponent({
	name: "FormLogin",
	components: { MainButton, PasswordRevelling },
	emits: ['handleSubmit'],
	data() {
		return {
			inputType: 'password',
			user: {
				email: '',
				password: '',
			}
		}
	},
	computed: {
		isPasswordVisible():boolean {
			return this.inputType === 'text'
		}
	},

	methods: {
		togglePassword() {
			this.inputType = this.isPasswordVisible ? 'password' : 'text'
		},
	},
});
</script>
