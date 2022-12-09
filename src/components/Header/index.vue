<template>
	<header class="header">
		<div class="header__infos">
			<div class="header--gretting">
				Seja bem vindo <strong>Nome do Usuário</strong>
			</div>
			<div>
				<strong>Dashboard</strong>
			</div>
		</div>
		<div>
			botoes de comando
		</div>
	</header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
	name: 'Header',
})
</script>
