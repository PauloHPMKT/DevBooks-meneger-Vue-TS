<template>
	<div class="overview">
		<SearchBar
			:search_name="'Encontre um usuário'"
			:event_name="'Cadastrar novo usuário'"
		/>
		<ul class="table">
			<CardUserList :user_state="users" />
		</ul>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchBar from "@/components/SearchBar/index.vue";
import CardUserList from "@/components/Cards/User/CardUserList.vue";

export default defineComponent({
	name: "UserReports",
	components: {
		SearchBar,
		CardUserList,
	},

	data() {
		return {
			users: this.$store.state.userStore.Users,
		};
	},

	methods: {
		async getAllUsers() {
			await this.$store.dispatch("userStore/getAllUsers", this.users);
		},
	},

	mounted() {
		this.getAllUsers();
	},
});
</script>
