<template>
	<header class="header">
		<div class="header__infos">
			<div class="header--gretting">
				Seja bem vindo(a) <strong>{{ $store.state.userStore.userName.split(' ').slice(0, 2).toString().replace(',', ' ') }}</strong>
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
