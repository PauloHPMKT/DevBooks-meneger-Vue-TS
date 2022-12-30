<template>
	<header class="header">
		<div class="header__infos">
			<div class="header--gretting">
				Seja bem vindo(a)
				<strong>{{
					$store.state.userStore.userName
						.split(" ")
						.slice(0, 2)
						.toString()
						.replace(",", " ")
				}}</strong>
			</div>
			<div>
				<strong>{{ $store.state.userStore.routerName }}</strong>
			</div>
		</div>
		<div class="header__infos--commands">
			<div @click="isCardActive" :title="user_message" ref="profileCard">
				<span>L</span>
			</div>
			<ProfileCard
				@hiddenProfileCard="hiddenCard"
				:class="{ isActive: setProfileCard }"
			/>
		</div>
	</header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ProfileCard from "@/components/Cards/ProfileCard.vue";

export default defineComponent({
	name: "Header",
	components: { ProfileCard },
	data() {
		return {
			user_message: `Clique aqui para acessar suas configuracoes`,
			setProfileCard: false,
		};
	},
	methods: {
		isCardActive(): void {
			this.setProfileCard = true;
		},
		hiddenCard() {
			this.setProfileCard = false;
		},
	},

	mounted() {
		const self: any = this.$refs.profileCard;
		document.addEventListener("click", (e: Event) => {
			if (self !== undefined && self.contains(e.target) === false) {
				this.setProfileCard = false;
			}
		});
	},
});
</script>
