<template>
	<div class="overview">
		<SearchBar
			:search_name="'Encontre um usuário'"
			:event_name="'Cadastrar novo usuário'"
		/>
		<ul class="table">
			<CardUserList :user_state="users" />
		</ul>
		<div>
			<Pagination
				:totalPages="10"
				:perPage="10"
				:currentPage="currentPage"
				@pagechanged="onPageChange"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchBar from "@/components/SearchBar/index.vue";
import CardUserList from "@/components/Cards/User/CardUserList.vue";
import Pagination from "@/components/Pagination/Pagination.vue";

export default defineComponent({
	name: "UserReports",
	components: {
		SearchBar,
		CardUserList,
		Pagination,
	},

	data() {
		return {
			users: this.$store.state.userStore.Users,
			currentPage: 1,
		};
	},

	methods: {
		async getAllUsers() {
			await this.$store.dispatch("userStore/getAllPaginatedUsers", this.users);
		},
		// criar url paginada
		onPageChange(page: number) {
			console.log(page);

			this.currentPage = page;
		},
	},

	mounted() {
		this.getAllUsers();
	},
});
</script>
