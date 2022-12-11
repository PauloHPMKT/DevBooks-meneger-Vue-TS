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
		<div class="header__infos--commands">
			<div @click="isCardActive" :title="user_message">
				<Icon icon="carbon:user-avatar-filled" />
				<span>Meu painel</span>
			</div>
			<ProfileCard @hiddenProfileCard="hiddenCard" :class="{ 'isActive': setProfileCard }"/>
		</div>
	</header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from '@iconify/vue'

import ProfileCard from '@/components/Cards/ProfileCard.vue'

export default defineComponent({
	name: 'Header',
	components: { Icon, ProfileCard },
	data() {
		return {
			user_message: `Clique aqui para acessar suas configuracoes`,
			setProfileCard: false,
		}
	},
	methods: {
		isCardActive(): void {
			this.setProfileCard = true
		},
		hiddenCard()  {
			this.setProfileCard = false
		}
	}
})
</script>
